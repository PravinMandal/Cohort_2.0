const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");


async function registerUser(req, res) {
    const {username, email, password} = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [{ email }, { username }]
    });

    if (isAlreadyRegistered) {
        return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token)

    return res.status(201).json({ 
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        } 
    });

}

async function loginUser(req, res) {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            {email},
            {username}
        ]
    }).select("+password");

    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token);

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}

async function getMe(req, res) {
    const user = await userModel.findById(req.user.id).select("-password");
    return res.status(200).json({
        message: "User fetched successfully",
        user
    });
}

async function logoutUser(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ message: "User not logged in" });
    }

    // Clear the cookie, so that the token is removed from the client side.
    res.clearCookie("token");

    // Blacklist the token, so that it cannot be used again, we added this token in mongoDB blacklist collection.
    await blacklistModel.create({ token });

    return res.status(200).json({
        message: "User logged out successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser
};

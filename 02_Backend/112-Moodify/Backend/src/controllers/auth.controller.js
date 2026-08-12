const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");


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
    });

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

module.exports = {
    registerUser,
    loginUser
};
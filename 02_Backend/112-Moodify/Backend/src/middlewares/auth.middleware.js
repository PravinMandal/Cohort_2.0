const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Token not Provided" });
    }

    // Check if the token is blacklisted, if yes then return 401 Unauthorized
    // const isTokenBlacklisted = await blacklistModel.findOne({ token });

    const isTokenBlacklisted = await redis.get(token);

    if(isTokenBlacklisted) {
        return res.status(401).json({ message: "Token is blacklisted, Please login again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token, Token Expired" });
    }
}

module.exports = authUser;
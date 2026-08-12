const {router} = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = router();

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);

module.exports = authRouter;
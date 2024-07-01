const express = require('express');
const { register, login, handleRefreshToken, changePassword, forgotPassword, logout } = require('../controller/authController.js');
const { checkRefreshToken, checkAccessToken } = require('../middleware/auth.js');
const authRoute = express.Router()

authRoute.post("/register", register)
authRoute.post("/login", login)

authRoute.post('/refresh-token', checkRefreshToken, handleRefreshToken)

authRoute.put('/change-password', checkAccessToken, changePassword)
authRoute.put('/forgot-password', forgotPassword)
authRoute.post('/logout', checkAccessToken, logout)

module.exports = authRoute;
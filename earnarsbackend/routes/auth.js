const express = require('express')
const { register, login, verifyEmail, checkUser, forgotPassword, logout, resetPassword, getAllUsers } = require('../controllers/authController.js')
// const { register, adminLogin , adminRegister, register1, resetPassword, login, logout, forgotPassword } = require('../controllers/auth.js')

const router = express.Router()

router.post("/register", register)
router.get("/all-user", getAllUsers)
// router.post("/admin", adminRegister)
// router.post("/admin-login", adminLogin)
router.post("/reset-password", resetPassword)
router.get("/verify", verifyEmail)
router.get("/check-email", checkUser)
router.post("/login", login)
router.post("/logout", logout)
router.post("/forgot-password", forgotPassword)


module.exports = router;
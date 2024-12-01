const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendEmail, sendEmail1 }= require('../utils/emailService');
const { db } = require('../db.js')

const SECRET = process.env.SECRET;




// const ver = crypto.randomBytes(32).toString('hex');


// Register User

// exports.register = async (req, res) => {
//     console.log(req.body);
//     const { username, email, password } = req.body;

//     try {
//         // Check if the email is already registered
//         const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

//         if(existingUser.length > 0) {
//             return res.status(400).json({ message: "Email is already registered. Please log in." });
//         }

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Generate verification token
//         const verificationToken = crypto.randomBytes(32).toString('hex');

//         // Insert new user into the database
//         await db.query(
//             "INSERT INTO users (username, email, password, verification_token) VALUES (?, ?, ?, ?)",
//             [username, email, hashedPassword, verificationToken]
//         );

//         // Send email verification link
//         const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
//         await sendEmail(email, 'Verify Your Email', `Click this link to verify your account: ${verificationLink}`);

//         res.status(201).json({ message: "Registration successful! Please check your email to verify your account." });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error registering user. Please try again later.", error });
//     }
// };


// exports.register = async (req, res) => {
//     const { username, email, password, referralCode } = req.body;
//     console.log(req.body);

//     // Check if user exists
//     const userCheckQuery = 'SELECT * FROM users WHERE email = ?';
//     db.query(userCheckQuery, [email], async (err, results) => {
//         if (err) return res.status(500).send({ message: 'Database error.' });
//         if (results.length > 0) return res.status(400).send({ message: 'User already registered.' });

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Generate verification token
//         const verificationToken = crypto.randomBytes(32).toString('hex');


//         // Insert new user
//         const insertQuery = `INSERT INTO users (username, email, password,verification_token, referral_code, referred_by) VALUES (?, ?, ?, ?, ?, ?)`;
//         db.query(insertQuery, [username, email, hashedPassword, verificationToken, referralCode || null, null], (err, result) => {
//             if (err) return res.status(500).send({ message: 'Database error.' });

//             // Generate verification token
//             // const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

//             // Send verification email
//             // sendVerificationEmail(email, token);
//             const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
//              sendEmail(email, 'Verify Your Email', `Click this link to verify your account: ${verificationLink}`);

//             res.status(201).send({ message: 'User registered. Please verify your email.' });
//         });
//     });
// };
// exports.register = async (req, res) => {
//     const { username, email, password, referralCode } = req.body;

//     try {
       

//         // Check if user exists
//         const userCheckQuery = 'SELECT * FROM users WHERE email = ?';
//         const [existingUsers] = await db.query(userCheckQuery, [email]);

//         if (existingUsers.length > 0) {
//             return res.status(400).send({ message: 'User already registered.' });
//         }

//         // Generate referral code for the new user
//         const newReferralCode = `REF${Date.now()}${Math.floor(Math.random() * 1000)}`;

//         // Check if referred by someone
//         let referrerId = null;
//         if (referralCode) {
//             const pp = 'SELECT user_id FROM users WHERE referral_code = ?';
//             await db.query(pp, [referralCode], (err, results) => {
//                 if (results.length > 0) {
//                     referrerId = results[0].user_id;
//                 }
//             });
//         }

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Generate verification token
//         const verificationToken = crypto.randomBytes(32).toString('hex');

//         // Insert new user
//         const insertQuery = `
//             INSERT INTO users (username, email, password, verification_token, referral_code, referred_id)
//             VALUES (?, ?, ?, ?, ?, ?)
//         `;
//         await db.query(insertQuery, [
//             username,
//             email,
//             hashedPassword,
//             verificationToken,
//             newReferralCode || null,
//             referrerId,
//         ]);

//         // Send verification email
//         const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
//         await sendEmail(email, 'Verify Your Email', `Click this link to verify your account: ${verificationLink}`);

//         res.status(201).send({ message: 'User registered. Please verify your email.' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ message: 'An error occurred during registration.' });
//     }
// };

exports.register = async (req, res) => {
    const { username, email, password, referralCode } = req.body;

    try {
        // Check if user already exists
        const userCheckQuery = 'SELECT * FROM users WHERE email = ?';
        const [existingUsers] = await db.query(userCheckQuery, [email]);

        if (existingUsers.length > 0) {
            return res.status(400).send({ message: 'User already registered.' });
        }

        // Generate referral code for the new user
        const newReferralCode = `REF${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Check if referred by someone
        let referrerId = null;
        if (referralCode) {
            const referrerQuery = 'SELECT user_id FROM users WHERE referral_code = ?';
            const [referrerResults] = await db.query(referrerQuery, [referralCode]);

            if (referrerResults.length > 0) {
                referrerId = referrerResults[0].user_id;

                // Insert referral into referrals table
                const referralInsertQuery = `
                    INSERT INTO referrals (referrer_id, referred_email)
                    VALUES (?, ?)
                `;
                await db.query(referralInsertQuery, [referrerId, email]);

                // Update referral count for the referrer
                const updateReferralCountQuery = `
                    UPDATE users
                    SET referral_count = referral_count + 1
                    WHERE user_id = ?
                `;
                await db.query(updateReferralCountQuery, [referrerId]);
            }
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');

        // Insert new user
        const insertQuery = `
            INSERT INTO users (username, email, password, verification_token, referral_code, referred_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        await db.query(insertQuery, [
            username,
            email,
            hashedPassword,
            verificationToken,
            newReferralCode,
            referrerId,
        ]);

        // Send verification email
        const verificationLink = `http://localhost:3000/verify?token=${verificationToken}`;
        await sendEmail(email, 'Verify Your Email', `Click this link to verify your account: ${verificationLink}`);

        res.status(201).send({ message: 'User registered. Please verify your email.' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred during registration.' });
    }
};





// Verify Email
exports.verifyEmail = async (req, res) => {
    const { token } = req.query;

    try {
        const [result] = await db.query(
            "UPDATE users SET is_verified = TRUE WHERE verification_token = ?",
            [token]
        );

        if (result.affectedRows === 0)
            return res.status(400).json({ message: "Invalid token" });

        res.status(200).json({ message: "Email verified successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error verifying email", error });
    }
};


// Endpoint to check if a user exists
exports.checkUser = async (req, res) => {
    const { email } = req.query;

 
    try {
        const q = "SELECT * FROM users WHERE email = ?";
        const [results] = await db.query(q, [email]);

        if (results.length > 0) {
            res.status(200).send({ message: "User exists." });
        } else {
            res.status(404).send({ message: "User not found." });
        }
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send({ message: "Database error." });
    }
};

// Login User
// exports.login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//         const user = rows[0];

//         if (!user || !(await bcrypt.compare(password, user.password)))
//             return res.status(401).json({ message: "Invalid credentials" });

//         if (!user.is_verified)
//             return res.status(401).json({ message: "Please verify your email first" });

//         const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '12h' });
//         const { password, ...other } = user;
//         res.cookie('token', token, { httpOnly: true, maxAge: 12 * 60 * 60 * 1000 }).status(200).json(other);
//         res.status(200).json({ message: "Login successful!" });
//     } catch (error) {
//         res.status(500).json({ message: "Error logging in", error });
//     }
// };


// exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body)

//     try {
//         // Validate input
//         if (!email || !password) {
//             return res.status(400).send({ message: 'Email and password are required.' });
//         }

//         // Query user from the database
//         const [results] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//         if (results.length === 0) {
//             return res.status(404).send({ message: 'User not found.' });
//         }

//         const user = results[0];

//         // Check if user is verified
//         if (!user.is_verified) {
//             return res.status(403).send({ message: 'Please verify your email before logging in.' });
//         }

//         // Validate password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).send({ message: 'Invalid email or password.' });
//         }

//         // Generate session token (valid for 12 hours)
//         const token = jwt.sign(
//             { id: user.user_id, email: user.email },
//             SECRET,
//             { expiresIn: '12h' }
//         );

//         // Save the session in the database
//         const sessionId = `${user.user_id}_${new Date().getTime()}`; // Unique session ID
//         const expiryTime = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours from now

//         await db.query('INSERT INTO sessions (session_id, user_id, expiry_time) VALUES (?, ?, ?)', [
//             sessionId,
//             user.user_id,
//             expiryTime,
//         ]);

//         // Respond with the token and session information
//         return res.status(200).send({
//             message: 'Login successful.',
//             token,
//             sessionId,
//             user: {
//                 user_id: user.user_id,
//                 username: user.username,
//                 email: user.email,
//                 balance: user.balance,
//                 is_tipster: user.is_tipster,
//             },
//         });
//     } catch(error) {
//         console.error('Login error:', error);
//         return res.status(500).send({ message: 'An unexpected error occurred.' });
//     }
// };


exports.login = async (req, res) => {
    const { email, password } = req.body;
   
    try {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        const user = rows[0];
  
        if (!user || !(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ message: "Invalid credentials" });

        if (!user.is_verified)
            return res.status(401).json({ message: "Please verify your email first" });

        const token = jwt.sign({ id: user.user_id, email: user.email }, SECRET, { expiresIn: '12h' });

            // Save the session in the database
                const sessionId = `${user.user_id}_${new Date().getTime()}`; // Unique session ID
               const expiryTime = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours from now

                 await db.query('INSERT INTO sessions (session_id, user_id, expiry_time) VALUES (?, ?, ?)', [
                  sessionId,
                     user.user_id,
                   expiryTime,
                ]);

        //  const [password, ...other] = user

        res.cookie('token', token, { httpOnly: true, maxAge: 12 * 60 * 60 * 1000 });
        res.status(200).json({
            message: "Login successful!", sessionId,
            user: {
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                balance: user.balance,
                is_tipster: user.is_tipster,
                verification_token: user.verification_token,
                referral_code:user.referral_code
            }
});
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log(email)

    try {
        const resetToken = crypto.randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 15 * 60 * 1000);

        await db.query(
            "UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?",
            [resetToken, expiry, email]
        );

        const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
        await sendEmail1(email, 'Password Reset', `Reset your password using this link: ${resetLink}`);

        res.status(200).json({ message: "Password reset link sent" });
    } catch (error) {
        res.status(500).json({ message: "Error sending password reset link", error });
    }
};


// exports.resetPassword =  async (req, res) => {
//     const { token, newPassword } = req.body;

//     // Validate new password
//     if (!newPassword || newPassword.length < 6) {
//         return res.status(400).send({ message: 'Password must be at least 6 characters long.' });
//     }

//     try {
//         // Verify the reset token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const userId = decoded.user_id;

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);

//         // Update the user's password in the database using a promise
//         const updateQuery = 'UPDATE users SET password = ? WHERE user_id = ?';

//         const result = await new Promise((resolve, reject) => {
//             db.query(updateQuery, [hashedPassword, userId], (err, result) => {
//                 if (err) return reject(err);
//                 resolve(result);
//             });
//         });

//         if (result.affectedRows === 0) {
//             return res.status(404).send({ message: 'User not found.' });
//         }

//         res.status(200).send({ message: 'Password reset successful.' });
//     } catch (error) {
//         if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
//             return res.status(400).send({ message: 'Invalid or expired reset token.' });
//         }
//         res.status(500).send({ message: 'Internal server error.' });
//     }
// };




// Reset Password
exports.resetPassword = async (req, res) => {
    const { token, inputs } = req.body;


    const newPassword = inputs.password;
    const confirmPassword = inputs.password1;

    console.log(newPassword)
    if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
    }

    try {
        // Check if the reset token is valid
        const [rows] = await db.query(
            "SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()",
            [token]
        );

        const user = rows[0];

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired reset token." });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password and clear the reset token
        await db.query(
            "UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE user_id = ?",
            [hashedPassword, user.user_id]
        );

        res.status(200).json({ message: "Password has been reset successfully!" });
    } catch (error) {
        console.error("Error resetting password:", error);
        res.status(500).json({ message: "Failed to reset password. Please try again." });
    }
};


// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");

        if (rows.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }

        res.status(200).json({ users: rows });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users. Please try again." });
    }
};


// Assume you have a DB connection module

// exports.logout = (req, res) => {
//     const { sessionId, token } = req.body; // Assume client sends either sessionId or token

//     // Invalidate JWT token on the client side by just responding with a message
//     if (token) {
//         return res.status(200).send({ message: 'Logout successful. Please discard the JWT token.' });
//     }

//     // If sessionId is provided, remove the session from the database
//     if (sessionId) {
//         const deleteSessionQuery = 'DELETE FROM sessions WHERE session_id = ?';

//         // Wrap database query in a promise
//         const deleteSession = () => {
//             return new Promise((resolve, reject) => {
//                 db.query(deleteSessionQuery, [sessionId], (err, result) => {
//                     if (err) return reject(err);
//                     resolve(result);
//                 });
//             });
//         };

//         deleteSession()
//             .then((result) => {
//                 if (result.affectedRows === 0) {
//                     return res.status(404).send({ message: 'Session not found.' });
//                 }
//                 res.status(200).send({ message: 'Logout successful.' });
//             })
//             .catch((err) => {
//                 res.status(500).send({ message: 'Error logging out.', error: err.message });
//             });
//     } else {
//         return res.status(400).send({ message: 'Session ID or token required to log out.' });
//     }
// };



exports.logout = async (req, res) => {
    const { sessionId, token } = req.body;
    // console.log(token) // Assume client sends either sessionId or token

    try {
        // Invalidate JWT token on client side
        if (token) {
            return res.clearCookie("access_token", {
                httpOnly: true ,
                sameSite: "none",
                secure: true,

            }).status(200).send(console.log({ message: 'Logout successful. Please discard the JWT token.' }));
        }

        // Handle session logout
        if (sessionId) {
            const deleteSessionQuery = 'DELETE FROM sessions WHERE session_id = ?';
            const [result] = await db.query(deleteSessionQuery, [sessionId]);

            if (result.affectedRows === 0) {
                return res.status(404).send(console.log({ message: 'Session not found.' }));
            }

            return res.clearCookie("access_token", {
                httpOnly: true,
                sameSite: "none",
                secure: true,

            }).status(200).send({ message: 'Logout successful.' });
        }

        // If neither sessionId nor token is provided
        return res
            .status(400)
            .send({ message: 'Session ID or token required to log out.' });
    } catch (err) {
        console.error('Error during logout:', err);
        return res.status(500).send({ message: 'Error logging out.' });
    }
};

// exports.logout = async (req, res) => {
//     try {
//         // Clear the token from cookies
//         res.clearCookie('token', { httpOnly: true });
//         res.status(200).json({ message: "Logged out successfully!" });
//     } catch (error) {
//         console.error("Logout error:", error);
//         res.status(500).json({ message: "Failed to log out. Please try again." });
//     }
// };




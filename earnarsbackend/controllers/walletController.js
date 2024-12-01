const express = require("express")
const { db } = require('../db.js')


exports.unlockWallet = async (req, res) => {
    const { userId } = req.body;

    try {
        // Check if user exists and has a referrer
        const [rows] = await db.query(
            "SELECT user_id, referrer_id FROM users WHERE user_id = ?",
            [userId]
        );

        const user = rows[0];
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const unlockAmount = 5000;
        const referrerBonus = unlockAmount * 0.7;

        if (user.referrer_id) {
            // Add bonus to referrer's wallet
            await db.query(
                "INSERT INTO transactions (user_id, transaction_type, amount) VALUES (?, ?, ?)",
                [user.referrer_id, 'wallet_unlock_bonus', referrerBonus]
            );

            // Create a notification for the referrer
            const title = "Payment Received"
            const type  ="alert"
            const message = `Your referral unlocked their wallet. You earned ₦${referrerBonus}!`;
            await db.query(
                "INSERT INTO notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)",
                [user.referrer_id, title, message, type]
            );
        }

        res.status(200).json(console.log({ message: "Wallet unlocked successfully." }));
    } catch (error) {
        console.error("Error unlocking wallet:", error);
        res.status(500).json({ message: "Failed to unlock wallet. Please try again." });
    }
};


// exports.unlockWallet = async (req, res) => {
//     const { userId } = req.body;

//     try {
//         // Check if user exists and has a referrer
//         const [userRows] = await db.query(
//             "SELECT user_id, referrer_id FROM users WHERE user_id = ?",
//             [userId]
//         );

//         const user = userRows[0];
//         if (!user) {
//             return res.status(404).json({ message: "User not found." });
//         }

//         const unlockAmount = 5000;
//         const referrerBonus = unlockAmount * 0.75;

//         // Determine if the user has a referrer
//         if (user.referrer_id) {
//             // Update or insert into the transaction table for the referred user
//             await db.query(
//                 "INSERT INTO transactions (user_id, transaction_type, amount) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + ?",
//                 [userId, 'wallet_unlock', unlockAmount, unlockAmount]
//             );

//             // Update or insert into the transaction table for the referrer
//             await db.query(
//                 "INSERT INTO transactions (user_id, transaction_type, amount) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + ?",
//                 [user.referrer_id, 'wallet_unlock_bonus', referrerBonus, referrerBonus]
//             );

//             // Update the referrer's affiliate wallet
//             await db.query(
//                 "UPDATE affiliate_wallets SET balance = balance + ? WHERE user_id = ?",
//                 [referrerBonus, user.referrer_id]
//             );

//             // Create a notification for the referrer
//             const title = "Payment Received";
//             const type = "alert";
//             const message = `Your referral unlocked their wallet. You earned ₦${referrerBonus}!`;
//             await db.query(
//                 "INSERT INTO notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)",
//                 [user.referrer_id, title, message, type]
//             );
//         } else {
//             // If the user is not referred, update or insert into the transaction table
//             await db.query(
//                 "INSERT INTO transactions (user_id, transaction_type, amount) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE amount = amount + ?",
//                 [userId, 'wallet_unlock', unlockAmount, unlockAmount]
//             );
//         }

//         res.status(200).json({ message: "Wallet unlocked successfully." });
//     } catch (error) {
//         console.error("Error unlocking wallet:", error);
//         res.status(500).json({ message: "Failed to unlock wallet. Please try again." });
//     }
// };


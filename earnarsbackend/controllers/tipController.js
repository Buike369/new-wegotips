const { db } = require('../db.js')


exports.purchaseTip = async (req, res) => {
    const { userId, tipPrice } = req.body;

    try {
        // Check if user exists and has a referrer
        const [rows] = await db.query(
            "SELECT id, referrer_id FROM users WHERE id = ?",
            [userId]
        );

        const user = rows[0];
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const referrerBonus = tipPrice * 0.2;

        if (user.referrer_id) {
            // Add bonus to referrer's wallet
            await db.query(
                "INSERT INTO transactions (user_id, amount, type) VALUES (?, ?, ?)",
                [user.referrer_id, referrerBonus, 'tip_bonus']
            );

            // Create a notification for the referrer
            const message = `Your referral purchased a tip. You earned ₦${referrerBonus}!`;
            await db.query(
                "INSERT INTO notifications (user_id, message) VALUES (?, ?)",
                [user.referrer_id, message]
            );
        }

        res.status(200).json({ message: "Tip purchased successfully." });
    } catch (error) {
        console.error("Error purchasing tip:", error);
        res.status(500).json({ message: "Failed to purchase tip. Please try again." });
    }
};


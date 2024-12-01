const { db } = require('../db.js')

exports.getNotifications = async (req, res) => {
    const userId = req.params.userId;

    try {
        const [notifications] = await db.query(
            "SELECT notification_id, title, type, message, is_read, created_at FROM notifications WHERE user_id = ? ORDER BY created_at DESC",
            [userId]
        );

        res.status(200).json({ notifications });
    } catch (error) {
        console.error("Error fetching notifications:", error);
        res.status(500).json({ message: "Failed to fetch notifications. Please try again." });
    }
};

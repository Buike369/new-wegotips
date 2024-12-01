import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/authContext';

const Notifications = ({ userId }) => {
        const {currentUser} = useContext(AuthContext);
    const [notifications, setNotifications] = useState([]);
 const userId = currentUser?.user.user_id
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/notice/${userId}`);
                setNotifications(response.data.notifications);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
                <p>No notifications yet.</p>
            ) : (
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                            <p>{notification.message}</p>
                            <small>{new Date(notification.created_at).toLocaleString()}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notifications;

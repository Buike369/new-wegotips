import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');
            if (!token) {
                setError(true);
                setMessage("Invalid verification link.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5001/api/auth/verify?token=${token}`);
                setMessage(response.data.message);
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect to login page after 3 seconds
            } catch (err) {
                setError(true);
                setMessage(
                    err.response?.data?.message || "An error occurred during verification. Please try again."
                );
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{error ? "Verification Failed" : "Email Verified"}</h1>
            <p>{message}</p>
            {!error && <p>Redirecting to login page...</p>}
        </div>
    );
};

export default VerifyEmail;

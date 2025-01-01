import React, { useState } from 'react';
import axios from 'axios';

const DepositForm = () => {
     const wegoUrl =  '/api';
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDeposit = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${wegoUrl}/payment/deposit`, {
                userId: 11, // Replace with logged-in user ID
                amount,
                email,
            });
            window.location.href = response.data.link; // Redirect to payment link
        } catch (err) {
            console.error('Failed to initiate deposit:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <div style={{display:"flex",flexDirection:'column',width:"59%"}}>
            <h2>Deposit Funds</h2>
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                style={{width:"100%"}}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                  style={{width:"100%"}}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleDeposit} disabled={loading}>
                {loading ? 'Processing...' : 'Deposit'}
            </button>
            </div>
        </div>
    );
};

export default DepositForm;

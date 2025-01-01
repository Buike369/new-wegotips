import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PaymentCallback = () => {

    const wegoUrl =  '/api';
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const handleCallback = async () => {
            const status = searchParams.get('status');
            const tx_ref = searchParams.get('tx_ref');
            const transaction_id = searchParams.get('transaction_id');

            try {
                await axios.post(`${wegoUrl}/payment/payment-callback`, {
                    status,
                    tx_ref,
                    transaction_id,
                });
                alert('Payment processed successfully.');
            } catch (err) {
                console.error('Error processing payment callback:', err);
            }
        };

        handleCallback();
    }, [searchParams]);

    return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
    <h2 style={{color:"#fff"}}>Processing Payment...</h2>
</div>
);
};

export default PaymentCallback;


const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

// Endpoint to initialize payment
// currency: currency || 'USD',
exports.initiatePayment = async (req, res) => {
    const { userId, amount, currency } = req.body;

    try {
        const payload = {
            tx_ref: `txn_${Date.now()}`,
            amount,
            currency: currency || 'NGN',
            redirect_url: 'http://localhost:3000/payment-status', // Replace with your frontend URL
            customer: {
                email: 'user@example.com', // Replace dynamically
                phonenumber: '1234567890', // Replace dynamically
                name: 'John Doe', // Replace dynamically
            },
            customizations: {
                title: 'Wegotips Wallet Deposit',
                description: 'Deposit funds to your wallet',
                logo: 'https://wegotips.com/logo.png', // Optional company logo
            },
            meta: {
                userId, // Pass userId for tracking
            },
        };

        const response = await flw.PaymentLink.create(payload);

        if (response.status === 'success') {
            res.status(200).json({
                status: 'success',
                message: 'Payment link created successfully',
                paymentLink: response.data.link,
            });
        } else {
            res.status(400).json({ status: 'failed', message: 'Failed to create payment link' });
        }
    } catch (error) {
        console.error('Error initializing payment:', error);
        res.status(500).json({ status: 'error', message: 'An error occurred while initiating payment' });
    }
};



exports.webHooks = async (req, res) => {
    const payload = req.body;

    try {
        if (payload.event === 'charge.completed' && payload.data.status === 'successful') {
            const transactionId = payload.data.id;
            const userId = payload.data.meta.userId;
            const depositAmount = payload.data.amount;

            // Update wallet balance in the database
            await updateWalletBalance(userId, depositAmount);

            console.log(`Transaction ${transactionId} confirmed for User ${userId}`);
            res.status(200).send('Webhook processed');
        } else {
            res.status(400).send('Invalid webhook event');
        }
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).send('An error occurred');
    }
};

// Function to update wallet balance in the database
async function updateWalletBalance(userId, amount) {
    console.log(`Updating wallet for User ${userId} with amount ${amount}`);
    // Replace with actual database logic
}


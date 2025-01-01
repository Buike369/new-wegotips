const { db } = require('../db.js')
require('dotenv').config()
const axios = require('axios');


const FLUTTERWAVE_SECRET_KEY = process.env.FLW_SECRET_KEY;


exports.deposit = async (req, res) => {
    console.log(req.body)
    const { userId, amount, email } = req.body;
    try {
        // Create transaction in DB
        const [result] = await db.query(
            'INSERT INTO transactions (user_id, amount, status) VALUES (?, ?, ?)',
            [userId, amount, 'pending']
        );
        const transactionId = result.insertId;
        console.log(result)

        // Initialize payment with Flutterwave
        const flutterwaveResponse = await axios.post(
            'https://api.flutterwave.com/v3/payments',
            {
                tx_ref: `TX-${transactionId}`,
                amount,
                currency: 'USD',
                redirect_url: 'http://localhost:3000/payment-callback',
                customer: { email },
                customizations: { title: 'Adane Technology Deposit' },
            },
            {
                headers: { Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}` },
            }
        );

        res.json({ link: flutterwaveResponse.data.data.link });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to initiate deposit.' });
    }
};


exports.callbackU = async (req, res) => {
    console.log(req.body)
    const { status, tx_ref, transaction_id } = req.body;

    try {
        const transactionId = tx_ref.split('-')[1];
        console.log(transactionId)

        // Verify transaction with Flutterwave
        const verifyResponse = await axios.get(
            `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
            {
                headers: { Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}` },
            }
        );

        const verifiedStatus = verifyResponse.data.data.status;
        const finalStatus = verifiedStatus === 'successful' ? 'Completed' : 'failed';

        // Update transaction status in DB
        await db.query(
            'UPDATE transactions SET status = ?, transaction_id = ? WHERE user_id = ?',
            [finalStatus, transaction_id, transactionId]
        );

        res.json({ message: 'Payment processed successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to process payment callback.' });
    }
};


// Add Personal Information
exports.addPersonalInformation = async (req, res) => {
    console.log(req.body)
    const { user_id, fullname, phonenumber, country, address, state, city, zip } = req.body;

    if (!user_id || !fullname) {
        return res.status(400).json({ message: 'user_id and fullname are required.' });
    }

    try {


        const que = `
      INSERT INTO personal_information (user_id, fullname, phonenumber, country, address, state, city, zip)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
        const [result] = await db.query(que, [user_id, fullname, phonenumber, country, address, state, city, zip]);



        res.status(201).json({ message: 'Personal information added successfully.', id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding personal information.' });
    }
};


// Get Personal Information by User ID
exports.getPersonalInformation = async (req, res) => {
    const { user_id } = req.params;

    console.log(user_id)

    try {


        const que = `
      SELECT * FROM personal_information WHERE user_id = ?
    `;
        const [rows] = await db.query(que, [user_id]);



        if (rows.length === 0) {
            return res.status(404).json({ message: 'No personal information found for the given user_id.' });
        }

        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving personal information.' });
    }
};
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD 
    }
});


const sendEmail = async (email, subject, text) => {
    await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to : email,
        subject: subject,
        html: `
      <p>Thank you for registering!</p>
      <p>Please verify your email by clicking the link below:</p>
      <p> ${text} </p>
    
      <p>This link will expire in 1 hour.</p>
    `,
    });
};
const sendEmail1 = async (email, subject, text) => {
    await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject: subject,
        html: `
      <p>Reset Password!</p>
      <p>Please verify your email by clicking the link below:</p>
      <p> ${text} </p>
    
      <p>This link will expire in 1 hour.</p>
    `,
    });
};

module.exports = { sendEmail,sendEmail1 };

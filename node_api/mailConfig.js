const nodemailer = require('nodemailer')

// Set up the email transport using your service's SMTP details (e.g., Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use another service like SendGrid
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  from: 'Sender@server.com',
  debug: true, // show debug output
})

module.exports = transporter

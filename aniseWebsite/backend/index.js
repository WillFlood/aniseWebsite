const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set your SendGrid API key in a .env file or as an environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/join-waitlist', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const msg = {
    to: email,
    from: 'your_verified_sender@example.com', // Replace with your verified sender
    subject: 'Welcome to the Anise Waitlist!',
    text: 'Thank you for joining the Anise waitlist. We’ll keep you updated!',
    html: '<strong>Thank you for joining the Anise waitlist. We’ll keep you updated!</strong>',
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
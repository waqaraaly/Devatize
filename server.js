import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('Starting server...');
console.log('Email configuration:', {
  userConfigured: !!process.env.EMAIL_USER,
  passwordConfigured: !!process.env.EMAIL_PASSWORD
});

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Password exists:', !!process.env.EMAIL_PASSWORD);

const app = express();

// Updated CORS configuration
app.use(cors({
  origin: '*', // For testing - we'll restrict this later
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('Missing fields in request');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'waqaraaly@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Added error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  app.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
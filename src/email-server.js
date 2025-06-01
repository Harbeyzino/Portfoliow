// This is a simple API route for sending emails using Nodemailer
// Place this file in your Vite project's /src directory or set up a backend server

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abbeyzino51@gmail.com', // your email
      pass: 'ulsi zjch eujb ahxr' // use an app password, not your real password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'abbeyzino51@gmail.com',
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

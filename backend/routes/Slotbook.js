// Slotbook.js
// Handles slot booking POST request and sends confirmation emails

const express = require('express');
const nodemailer = require('nodemailer');
const Slot = require('../models/Slot');
const transporter = require("../utils/transporter");
require('dotenv').config();

const router = express.Router();

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
  throw new Error('Missing required environment variables: EMAIL_USER, EMAIL_PASS, or ADMIN_EMAIL');
}

// POST: /api/book-slot
router.post('/book-slot', async (req, res) => {
  const { name, email, contact, date, hours, timeSlot } = req.body;

  if (!name || !email || !contact || !date || !hours || !timeSlot) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // 🛑 Check for existing booking
  const existing = await Slot.findOne({ email, date, timeSlot });
  if (existing) {
    return res.status(400).json({ message: "You have already booked this time slot." });
  }

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Slot Booking Received',
    text: `New Booking:\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nDate: ${date}\nHours: ${hours}\nTime Slot: ${timeSlot}`,
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Slot Booking Confirmation',
    text: `Dear ${name},\n\nYour booking is confirmed.\nDate: ${date}\nTime Slot: ${timeSlot}\nDuration: ${hours} hour(s)\n\nThank you!`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    const slot = new Slot({ name, email, contact, date, hours, timeSlot });
    await slot.save();

    return res.status(200).json({ message: 'Booking confirmed and emails sent.' });
  } 
  catch (error) {
    console.error('Booking failed:', error); 
    return res.status(500).json({ 
      message: 'Booking failed. Please try again later.',
      error: error.message
    });
  }  
});

module.exports = router;

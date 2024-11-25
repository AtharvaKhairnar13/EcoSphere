import bcrypt from "bcryptjs";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";

import asyncHandler from "../../middlewares/asyncHandler.js";
import OTP from "../../models/otpModel.js";

const sendOTPemail = asyncHandler(async ({ _id, email }, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const otp = await otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your EcoSphere Account Verification OTP",
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.8;
            color: #2c3e50;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #27ae60;
            color: #ffffff;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header img {
            width: 100px;
            margin-bottom: 10px;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            text-align: left;
          }
          .content p {
            margin: 10px 0;
            font-size: 16px;
          }
          .content .otp {
            font-size: 20px;
            font-weight: bold;
            color: #27ae60;
          }
          .footer {
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 0 0 10px 10px;
            text-align: center;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://via.placeholder.com/100x100" alt="EcoSphere Logo">
            <h2>Welcome to EcoSphere 🌍</h2>
          </div>
          <div class="content">
            <p>Dear Valued Member,</p>
            <p>Thank you for joining *EcoSphere*—your platform for a greener, more sustainable future.</p>
            <p>Your One-Time Password (OTP) for verifying your EcoSphere account is:</p>
            <p class="otp">${otp}</p>
            <p><strong>This OTP is valid for 1 minute.</strong> Please complete your verification promptly.</p>
            <p>At EcoSphere, we empower individuals and communities to make eco-friendly choices that matter. From managing carbon footprints to connecting with sustainability resources, your journey starts here.</p>
            <p>If you did not request this OTP, please disregard this message.</p>
          </div>
          <div class="footer">
            <p>Need help? Visit our <a href="https://example.com/help" style="color: #27ae60; text-decoration: none;">Help Center</a></p>
            <p>Thank you for choosing EcoSphere—together, let's build a sustainable future.</p>
            <p><em>This is an automated message. Please do not reply.</em></p>
          </div>
        </div>
      </body>
    </html>
  `,
};

  const salt = await bcrypt.genSalt(Number(process.env.ENCRYPTION_SALT));
  const hashedOTP = await bcrypt.hash(otp, salt);

  const newOTP = new OTP({
    userID: _id,
    otp: hashedOTP,
    expiresAt: Date.now() + 1 * 60 * 1000,
  });

  await newOTP.save();
  await transporter.sendMail(mailOptions);

  return res.json({
    message: "OTP sent successfully. Please check your inbox!",
    data: {
      userID: _id,
      email,
    },
  });
});

export default sendOTPemail;
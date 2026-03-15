import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendResetEmail(to, link) {

  await transporter.sendMail({
    from: `"FinVision" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Reset Your FinVision Password",
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
    `
  });

}
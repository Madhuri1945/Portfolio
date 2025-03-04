import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.post("/send", async (req, res) => {
  const { from_name, from_email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.TO_EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: from_email,
      to: process.env.TO_EMAIL,
      subject: `New message from ${from_name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});
app.listen(PORT, () => console.log("Server is running on port 5000"));

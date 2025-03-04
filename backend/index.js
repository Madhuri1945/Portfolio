const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
  const { from_name, from_email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madhuridhulipudi37@gmail.com",
        pass: "axuw allv pqyh olle",
      },
    });

    const mailOptions = {
      from: from_email,
      to: "madhuridhulipudi37@gmail.com",
      subject: `New message from ${from_name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server is running on port 5000"));

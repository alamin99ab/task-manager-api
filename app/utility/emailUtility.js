import nodemailer from "nodemailer";
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER } from "../config/config";

const sendEmail = async (EmailTo, EmailText, EmailSubject) => {
    try {
        // Ensure EMAIL_SECURITY is boolean
        const isSecure = EMAIL_SECURITY === "true" || EMAIL_SECURITY === true;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: parseInt(EMAIL_PORT, 10),
            secure: isSecure, // true for 465, false for other ports
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Optional, depending on your mail server
            },
        });

        // Mail options
        const mailOptions = {
            from: `Task Manager MERN <${EMAIL_USER}>`, // Adjusted the sender email address dynamically
            to: EmailTo,
            subject: EmailSubject,
            text: EmailText,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);

        return info; // Return the response info
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw new Error("Email could not be sent.");
    }
};

export default sendEmail;

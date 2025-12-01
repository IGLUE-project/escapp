const nodemailer = require("nodemailer");

function createTransport() {
    const provider = process.env.MAIL_PROVIDER || "sendgrid";

    if (provider === "sendgrid") {
        const sgMail = require("@sendgrid/mail"); 
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); 

        return {sendMail: (msg) => sgMail.send(msg)};
        
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        logger: true,
        debug: true
    });
}

const transporter = createTransport();

exports.sendEmail = async (to, subject = "escapp", text, html) => {
    const from = process.env.MAIL_FROM || `noreply@${process.env.APP_NAME || "escapp.dit.upm.es"}`;

    try {
        const info = await transporter.sendMail({ to, from, subject, text, html });
        return info;
    } catch (err) {
        console.error("Email sending failed");
        console.error("Name:", err.name);
        console.error("Code:", err.code);
        console.error("Command:", err.command);
        console.error("Stage:", err.stage);
        console.error("Message:", err.message);
        console.error("Stack:", err.stack);
        throw err;
    }
};

exports.contactEmail = (to, subject = "escapp", text, html) => {
    const from = `noreply@${process.env.APP_NAME || "escapp.dit.upm.es"}`;
    const msg = {
        to,
        from,
        subject,
        text,
        html
    };

    return sgMail.send(msg);
};

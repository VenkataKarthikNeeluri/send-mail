const nodeMailer = require('nodemailer')

const mailConfig = async (to,subject,content) => {
    try{
        // MAIL CONFIG
        const transporter = await nodeMailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASSWORD 
            }
        })

        // tranport mail
        let info = await transporter.sendMail({
            from: process.env.MAIL_ID,
            to,
            subject,
            html: `<div>${content}</div>`
        })

        return info
    } catch (err) {
        return err.message;
    }
}

module.exports = mailConfig
const mailConfig = require('../middleware/mail_config')

const sendMail = async(req,res) => {
    try {
        const { to, subject, content } = req.body 

        const response = await mailConfig(to,subject,content)

        return res.status(200).json({ msg: "mail sent successfully", response })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
        // 500 -> internal server error
    }
}

const notFound = async (req,res) => {
    try{
        return res.status(200).json({ msg: `Requested route path not found.`})
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


module.exports = { sendMail, notFound }
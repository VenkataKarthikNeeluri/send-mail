const sendMail = async(req,res) => {
    try {
        res.json({ msg: 'send mail controller' })
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
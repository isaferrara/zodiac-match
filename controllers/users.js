const User = require("../models/User")

exports.createProfile = (req, res) => res.render('auth/profile')

exports.processProfile = async(req, res) => {
    const {  } = req.body
    const logo = req.file.path
    await User.create({  })
    res.render('auth/dash')
}
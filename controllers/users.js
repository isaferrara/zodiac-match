const User = require("../models/User")


exports.createProfile = (req, res) => res.render('auth/profile')

exports.processProfiles =  async(req, res) => {
   
    // await User.findByIdAndUpdate('5fb3f23f45e1537882bbe79e' , {day: 29})
    const {day, month, year, hour, minutes, username, gender, plan } = req.body
    console.log('req.body', req.user)
    // const img = req.file.path
    await User.findByIdAndUpdate('5fb3f23f45e1537882bbe79e', {
        // _id: 'fadfadsfadsfsd',
        day: 43,
        month:month,
        year:year,
        hour:hour,
        minutes:minutes,
        username:username, 
        gender:gender,
         plan:plan,
        // profilePicture:img
      }, {new:true})
    res.redirect('/dash')
}

exports.profileDash = (req, res) => res.render('auth/dash')

const express = require('express');
const router  = express.Router();
const {createProfile, processProfiles, profileDash}= require('../controllers/users')

router.get('/create-profile', createProfile)
router.post('/create-profile', processProfiles)
router.get('/dash',  profileDash)


module.exports= router;
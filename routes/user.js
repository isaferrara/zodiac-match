const express = require('express');
const router  = express.Router();
const {createProfile, processProfile}= require("../controllers/users")

router.get('/create-profile', createProfile)
router.post('/create-profile', processProfile)


module.exports= router;
const express = require('express');

const Controller = require('../controller/user');

const router = express.Router()

router.post('/login',Controller.LoginUser)

router.post('/register',Controller.RegisterUser)




module.exports=router
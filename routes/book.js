const express = require('express');

const Controller = require('../controller/book')

const UserController = require('../controller/user');

const router = express.Router()

router.get('/book', Controller.getBookDetails)

router.get('/book/:id',Controller.getBookDetailsById)

router.post('/book',Controller.InsertBookDetails)

router.put('/book/:id',Controller.UpdateBookDetails)

router.delete('/book/:id',Controller.DeleteBookDetails)

router.post('/auth/register',UserController.RegisterUser)

router.post('/auth/login',UserController.LoginUser)

module.exports=router
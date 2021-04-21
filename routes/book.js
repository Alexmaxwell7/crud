const express = require('express');

const Controller = require('../controller/book')

const router = express.Router()

router.get('/book', Controller.getBookDetails)

router.get('/book/:id',Controller.getBookDetailsById)

router.post('/book',Controller.InsertBookDetails)

router.put('/book/:id',Controller.UpdateBookDetails)

router.delete('/book/:id',Controller.DeleteBookDetails)

module.exports=router
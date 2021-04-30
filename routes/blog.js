const express = require('express');

const Controller = require('../controller/blog');

const router = express.Router()

router.get('/post',Controller.getPosts)

router.get('/post/:id',Controller.getPostById)

router.post("/post",Controller.InsertPost)

router.put("/post/:id",Controller.UpdatePost)

router.delete("/post/:id",Controller.DeletePost)




module.exports=router
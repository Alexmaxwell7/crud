const express = require('express');

const Controller = require('../controller/todo');

const router = express.Router()

router.get('/todos',Controller.getTodos)

router.get('/todos/:id',Controller.getTodoById)

router.post("/todos",Controller.InsertTodo)

router.put("/todos/:id",Controller.UpdateTodo)

router.delete("/todos/:id",Controller.DeleteTodo)




module.exports=router
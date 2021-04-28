const Todos = require('../models/todo')
const to = require('await-to-js').default;
const mongoose = require('mongoose')

exports.getTodoById = async (req, res) => {
    let todo, err;
    [err, todo] = await to(Todos.findById(req.params.id));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(todo)
}
exports.getTodos = async (req, res) => {
    let todo, err;
    [err, todo] = await to(Todos.find());
    if (err) {
        return res.status(500).json({ 'Error ': err })
    }
    return res.status(200).json(todo)
}

exports.InsertTodo = async (req, res) => {
    const todo = new Todos({
        name: req.body.name,
        author: req.body.author,
        uid: req.body.uid,
        isComplete: req.body.isComplete,

    })
    todo.uid = todo._id;
    const [err, todos] = await to(todo.save());

    if (err) {
        return res.send(500).json({ 'error': err })
    }
    return res.send(200).json(todos)
}

exports.UpdateTodo = async (req, res) => {
    let todo;
    [err, todo] = await to(Todos.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(todo)
}
exports.DeleteTodo = async (req, res) => {
    let todo;
    [err, todo] = await to(Todos.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(todo)
}


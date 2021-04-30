const Blog = require('../models/blog');
const to = require('await-to-js').default;
const mongoose = require('mongoose')

exports.getPostById = async (req, res) => {
    let blog, err;
    [err, blog] = await to(Blog.findById(req.params.id));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(blog)
}
exports.getPosts = async (req, res) => {
    let blog, err;
    [err, blog] = await to(Blog.find());
    if (err) {
        return res.status(500).json({ 'Error ': err })
    }
    return res.status(200).json(blog)
}

exports.InsertPost = async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        postby: req.body.postby,
        uid: req.body.uid,
        isComplete:req.body.isComplete
    })
    blog.uid = blog._id;
    const [err, blogs] = await to(blog.save());

    if (err) {
        return res.send(500).json({ 'error': err })
    }
    return res.send(200).json(blogs)
}

exports.UpdatePost = async (req, res) => {
    let blog;
    [err, blog] = await to(Blog.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(blog)
}
exports.DeletePost = async (req, res) => {
    let blog;
    [err, blog] = await to(Blog.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body));
    if (err) {
        return res.status(500).json({ 'Error': err })
    }
    return res.status(200).json(blog)
}


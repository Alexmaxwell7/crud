const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
id:{
type:String,
unique:true
},
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    publisher:{
        type:String,
        required: true
    },
    availability:{
        type: String,
        required:true
    }
    

})

module.exports = mongoose.model('Books',bookSchema)
const Books = require('../models/book')
const to = require('await-to-js').default;
const mongoose = require('mongoose')

exports.getBookDetailsById = async(req,res)=> {
    let book,err;
    [err,book]= await to (Books.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(book)
    }
exports.getBookDetails= async (req,res)=>{
         let book,err;
         [err,book]=await to (Books.find());
         if(err){
         return  res.status(500).json({'Error ' : err})
         }
        return res.status(200).json(book)
        }

exports.InsertBookDetails=async (req,res)=>{
        const book = new Books({
            title: req.body.title,
            author: req.body.author,
            rating:req.body.rating,
            gender:req.body.gender,
            publisher:req.body.publisher,
            availability:req.body.availability,
           
        })
        book.id=book._id;
       const [err,books]=await to (book.save());
    
        if(err){
            return res.send(500).json({'error':err})
        }
        return res.send(200).json(books)
    }

 exports.UpdateBookDetails= async (req,res)=>{
                let book ;
                [err,book]= await to(Books.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
                if(err){
                    return res.status(500).json({'Error':err})
                }
                return res.status(200).json(book)
            }
 exports. DeleteBookDetails= async (req,res)=>{
                        let book ;
                        [err,book]= await to(Books.findOneAndDelete({_id:mongoose.Types.ObjectId(req.params.id)},req.body)); 
                        if(err){
                            return res.status(500).json({'Error':err})
                        }
                        return res.status(200).json(book)
                    }


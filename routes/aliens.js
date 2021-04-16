const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')
const to = require('await-to-js').default;

router.get('/', async(req,res) => {

    let alien,err;
    [err,alien]=await to (Alien.find());

    if(err){
      return  res.status(500).json({'Error ' : err})
    }
    return res.status(200).json(alien)
  
})

router.get('/:id', async(req,res) => {
    let alien,err;
    [err,alien]=await to (Alien.findById(req.params.id));
    if (err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(alien)
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

   const [err,aliens]=await to (alien.save());

    if(err){
        return res.send(500).json({'error':err})
    }
    return res.send(200).json(aliens) 
})

router.patch('/:id',async(req,res)=> {
    const alien = await Alien.findById(req.params.id) 
    alien.sub = req.body.sub
    alien.name = req.body.name
    alien.tech = req.body.tech
    const [err,alien_update]= await to (alien.save());
    if(err){
        return res.status(500).json({'Error':err})
    }
    return res.status(200).json(alien_update)
   
})

module.exports = router
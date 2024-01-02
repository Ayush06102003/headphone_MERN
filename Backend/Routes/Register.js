const express = require('express');
const router = express.Router();
const User = require("../models/user")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ayush@123';

router.post("/register", [
  body('name', 'Please fill this field').notEmpty(),
  body('name', 'Minimum length must be 3').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Five characters needed').isLength({ min: 5 }),
], async (req, res) => {
  let success = false;

    // if any error occur, return error
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    const SecPass = await bcrypt.hash(req.body.password, salt);
    
    try {
    let user = await User.findOne({email: req.body.email})   
    if(user){
        return res.status(400).json({success,error : "Sorry the email already exists"})
    }
    
    user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : SecPass,
    })
    
    const data = {
        user : {
            id : user.id,
        }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);

    res.json({success:true,authtoken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
});

router.post('/login',[
    body('email','enter a email').isEmail(),
    body('password','five characters needed').exists()],
    async(req,res)=>{
      let success = false;
      // if any error occur, return error
      
      const errors = validationResult(req);
      
      if (!errors.isEmpty()){
          return res.status(400).json({errors : errors.array()});
      }
  
      const {email,password} = req.body;
      try {
          let user = await User.findOne({email});
          if (!user){
              return res.status(400).json({error : 'Please enter correct credentials'});
          }
  
          const passwordCompare = await bcrypt.compare(password, user.password)
          if (!passwordCompare){
              success =false;
              return res.status(400).json({error : 'Please enter correct credentials'})
          }
  
          const data = {
              user : {
                  id : user.id,
              }
          }
      
          const authtoken = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({success,authtoken});
      } catch (error) {
          console.log(error.message);
          res.status(500).send("some error occured");
      }
  });


module.exports = router;
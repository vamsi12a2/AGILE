var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt-nodejs')
var path = require('path')
var jwt = require('jwt-simple')
var Login = require('../models/Login')
var config = require("../config")

var config = require('../config')


router.get("/", function(req, res, err) {
  console.log("called / using GET")
  return res.render("index.html")
});


router.post("/session",function(req,res,err){
    console.log("called /session using POST")
    var username = req.body.username
    var password = req.body.password
    Login.findOne({username:username}).
    exec(function(err,user){
      console.log(user)
      if(err){
        console.log(err + "ERR1")
        return err
      }
      if(!user){
        console.log("user not found")
        return res.sendStatus(401)
      }
      bcrypt.compare(password,user.password,function(err,valid){
        if(err){
          console.log(err + "ERR2")
          return err
        }
        if(!valid){
          console.log("password incorrect")
          return res.sendStatus(401);
        }
        var token = jwt.encode({username:user.username},config.secret)
        console.log("authenication success..")
        return res.json(token)
      })
    })
})



router.get('/user',function(req,res,err){

  if(!req.headers['x-auth']){
    console.log("invalid user")
    return res.sendStatus(401)
  }
  var user = jwt.decode(req.headers['x-auth'],config.secret)
  Login.findOne({username:user.username}).exec(function(err,user){
    if(err){
      console.log(err)
      return err
    }
    if(!user){
      console.log("user not found")
      return res.sendStatus(401)
    }
    console.log(user)
    console.log("login success..")
    return res.json(user)
  })
})


router.post('/user',function(req,res,err){
/*
 Login.findOne({username:req.body.username}).exec(function(user){
   console.log(user)
    if(user){
    Login.remove({username:username})
    console.log("user removed")
  }
})*/

    bcrypt.hash(req.body.password,bcrypt.genSaltSync(12),null,function(err,hash){
      if(err){
        console.log(err)
        return err
      }
      var user =new  Login({username:req.body.username,password:hash})
      user.save(function(err){
        console.log(err)
      })
      console.log("registration success..")
      return res.json("true");
    })

})



router.post("/addAlert",function(req,res,err){

  if(!req.headers['x-auth']){
    console.log("invalid user")
    return res.sendStatus(401)
  }
  var user = jwt.decode(req.headers['x-auth'],config.secret)
  
  Login.findOne({username:user.username}).exec(function(err,user){
    if(err){
      console.log(err)
      return err
    }
    if(!user){
      console.log("user not found")
      return res.sendStatus(401)
    }
    console.log("Body:"+req.body+"Name:"+req.body.name)
    Login.findByIdAndUpdate(user.id,{$push:{"Alert":{name:req.body.name,curr_pair:req.body.pair,filterBy:{By:req.body.filter,limit:req.body.limit.toString()}}}},
        {safe: true, upsert: true, new : true},
        function(err,model) {
            if(err)
            {  
              console.log(err);
            }
            console.log(model)
            return res.json(model)
        })
  })
  
 
 /* Login.findByIdAndUpdate(id,{$push:{"Alert":{name:req.body.name,curr_pair:req.body.pair,filterBy:{By:req.body.filter,limit:req.body.limit}}}},
        {safe: true, upsert: true, new : true},
        function(err,model) {
            if(err)
            {  
              console.log(err);
            }
            console.log(model)
            return res.json(model)
        })*/

})

module.exports = router

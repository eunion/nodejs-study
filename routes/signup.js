const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin()

router.get('/',checkLogin,function(req,res,next){
  res.send('注册页面')
})

router.post('/',checkLogin,function(req,res,next){
  res.send('注册')
})

module.exports = router

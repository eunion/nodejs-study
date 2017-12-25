const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const pkg = require('./package')

const app = express()

//view
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//设置静态文件目录
app.use(express.static(path.join(__dirname,'public')));

//session中间件
app.use(session({
  name: config.session.key,
  secret: config.session.secret,
  resave: true, //强制更新session
  saveUninitialized: false,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new MongoStore({
    url: config.mongodb
  })
}))

//flash通知插件
app.use(flash())

//路由
routes(app)

app.listen(config.port,function(){
  console.log(`${pkg.name} listening on port ${config.port}`)
});

module.exports  = {
  port:8989,
  session:  {
    secret: 'KifyBlog',
    key:  'KifyBlog',
    maxAge: 2592000000
  },
  mongodb:  'mongodb://localhost:27017/KifyBlog'
}

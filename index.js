const express = require('express')
const passport = require('passport')
require('./utils/passport')
const apiRouter = require('./routes/api')
const pageRouter = require('./routes/page')

const app = express()
const port = 7070

app.use('/js', express.static(__dirname+'/js'))
app.use('/css', express.static(__dirname+'/css'))
app.set('view engine', 'ejs')
app.use(passport.initialize())

app.use(apiRouter)
app.use(pageRouter)

app.listen(port, () => {
  console.log(`App is running at port ${port}`)
})
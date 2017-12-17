const express = require('express')
const userRouter = require('./user.js')

const app = express()
app.use('/user', userRouter)

app.listen('8080', function() {
	console.log('server is listen 8080!')
})
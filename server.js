'use strict'

let path = require('path')
let mongoose = require('mongoose')
let express = require('express')
let webpack = require('webpack')
let config = require('./webpack.config')
let url = 'mongodb://localhost:27017/'

let app = express()
let compiler = webpack(config)

mongoose.connect(url)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// app.route('/api/save/:name')
//   .post()

app.listen(7770, 'localhost', function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:7770')
})

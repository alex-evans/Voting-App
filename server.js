'use strict'

let path = require('path')
let mongo = require('mongodb').MongoClient
let express = require('express')
let webpack = require('webpack')
let config = require('./webpack.config')
let url = 'mongodb://localhost:27017/'

let app = express()
let compiler = webpack(config)

mongo.connect(url, function(err, db) {
  if(err) {
    throw new Error('Database failed to connect!')
  }
  console.log('MongoDB successfully connected!')

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

  app.listen(7770, 'localhost', function(err) {
    if(err) {
      console.log(err)
      return
    }

    console.log('Listening at http://localhost:7770')
  })

})

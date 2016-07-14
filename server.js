'use strict'

let express = require('express')
let routes = require('./app/index.js')
let mongo = require('mongodb').MongoClient
let app = express()
let url = 'mongodb://localhost:7770/'
let webpack = require('webpack')
let config = require('./webpack.config.dev')

mongo.connect(url, function(err, db) {
  if(err) {
    throw Error('Database failed to connect!')
  }
  console.log('MongoDB successfully connected.')

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

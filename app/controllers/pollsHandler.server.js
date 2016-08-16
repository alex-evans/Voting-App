'use strict'

let qs = require('querystring')

function PollsHandler() {

  this.savePoll = function (req, res) {
    let queryData = ""
    req.on('data', function(data) {
      queryData += data
      if(queryData.length > 1e6) {
        queryData = ""
        res.writeHead(413, {'Content-Type': 'text/plain'}).end()
        req.connection.destroy()
      }
    })

    req.on('end', function() {
      console.log(qs.parse(queryData).question)
    })
  }

}

module.exports = PollsHandler

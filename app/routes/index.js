'use strict'

let path = process.cwd()
let PollsHandler = require(path+ '/app/controllers/pollsHandler.server.js')

module.exports = function Polls(app) {

  let pollsHandler = new PollsHandler()

  app.route('/api/save/:name')
    .post(pollsHandler.savePoll)

}

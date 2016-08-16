'use strict'

import mongoose from 'mongoose'

let Schema = mongoose.Schema

let Poll = new Schema(
  { pollId: String },
  { name: String },
  { question: String },
  { options: Array },
  { userId: String }
)

export default mongoose.model('Poll', Poll)

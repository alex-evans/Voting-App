'use strict'

import mongoose from 'mongoose'

let Schema = mongoose.Schema

let Poll = new Schema(
  { name: String },
  { question: String },
  { options: Array }
)

export default mongoose.model('Poll', Poll)

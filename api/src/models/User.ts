import * as mongoose from 'mongoose'

const User = new mongoose.Schema({
  email: String,
})

export default mongoose.model('User', User)
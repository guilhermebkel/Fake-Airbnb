import * as mongoose from 'mongoose'

const Spot = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
})

Spot.virtual('thumbnail_url').get(function(){
  return (process.env.SERVER_URL + '/files/' + this.thumbnail)
})

export default mongoose.model('Spot', Spot)
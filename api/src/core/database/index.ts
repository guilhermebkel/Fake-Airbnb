import * as mongoose from 'mongoose'

export default class Database {
  constructor(){
    this.connectDatabase()
  }

  async connectDatabase(){
    await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log(`Connected to MongoDB...`)
  }
}
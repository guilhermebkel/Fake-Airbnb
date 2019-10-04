import { Express, Request, Response } from 'express'
import User from '../models/User'

export default {
  config(app: Express){
    app.post('/users', createUser)
  }
}

async function createUser(req: Request, res: Response){
  try{
    const { email } = req.body
    if (!email) return res.json({ success: false, error: 'Not sent email' })

    let user = await User.findOne({ email })

    if(!user){
      user = await User.create({ email })
    }

    return res.json({ success: true, data: user })
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}
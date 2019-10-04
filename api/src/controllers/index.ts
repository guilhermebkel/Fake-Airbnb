import { Express, Request, Response } from 'express'

export default {
  config(app: Express){
    app.post('/users', createUser)
  }
}

async function createUser(req: Request, res: Response){
  try{
    return res.json(req.body)
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}
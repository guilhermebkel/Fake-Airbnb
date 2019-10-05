import { Express, Request, Response } from 'express'
import * as multer from 'multer'

import Upload from '../modules/Upload'

import User from '../models/User'
import Spot from '../models/Spot'
import Booking from '../models/Booking'

const upload = multer(Upload)

export default {
  config(app: Express){
    app.post('/sessions', createUser)
    app.post('/spots', upload.single('thumbnail'), createSpot)
    app.get('/spots', getSpots)
    app.get('/dashboard', getUserSpots)
    app.post('/spots/:spot_id/bookings', createBooking)
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

async function createSpot(req: any, res: Response){
  try{
    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)

    if (!user) return res.json({ success: false, error: 'User does not exist!' })

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price
    })

    return res.json({ success: true, data: spot })
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}

async function getSpots(req: Request, res: Response){
  try{
    const { tech } = req.query
    
    const spots = await Spot.find({ techs: tech })

    return res.json({ success: true, data: spots })
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}

async function getUserSpots(req: Request, res: Response){
  try{
    const { user_id } = req.headers

    const spots = await Spot.find({ user: user_id })

    return res.json({ success: true, data: spots })
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}

async function createBooking(req: Request, res: Response){
  try{
    const { user_id } = req.headers
    const { spot_id } = req.params
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    })

    await booking.populate('spot').populate('user').execPopulate()

    return res.json({ success: true, data: booking })
  }
  catch(error){
    console.error(error)
    return res.json({ success: false, error })
  }
}
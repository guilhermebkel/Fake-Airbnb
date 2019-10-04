import * as express from 'express'
import { Express } from 'express'
import routes from '../../controllers'

export default class Server {
  _app: Express

  constructor(){
    this.startServer()
    this.setupMiddlewares()
    this.setupRoutes()
  }

  async startServer(){
    this._app = express()
    this._app.listen(process.env.PORT, () => {
      console.log(`Server running... [PORT ${process.env.PORT}]`)
    })
    this._app.get('/', (_req, res) => res.send('fake-airbnb'))
  }

  setupMiddlewares(){
    this._app.use(express.json())
  }

  setupRoutes(){
    routes.config(this._app)
  }
}
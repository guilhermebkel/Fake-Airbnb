import * as express from 'express'

export default class Server {
  _app: express

  constructor(){
    this.startServer()
  }

  async startServer(){
    this._app = express()
    this._app.listen(process.env.PORT, () => {
      console.log(`Server running... [PORT ${process.env.PORT}]`)
    })
  }
}
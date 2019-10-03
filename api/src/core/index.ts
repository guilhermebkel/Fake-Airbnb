import { name, version } from '../../package.json'
import Server from '../server'

export default new class Boot {
  _server: Server

  constructor(){
    console.log(`${name} v${version} starting...[${process.env.NODE_ENV}]`)
    this._server = new Server()
  }
}
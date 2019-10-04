import { name, version } from '../../package.json'
import Server from './server'
import Database from './database'

export default new class Boot {
  _server: Server
  _database: Database

  constructor(){
    console.log(`${name} v${version} starting... [${process.env.NODE_ENV}]`)
    this._server = new Server()
    this._database = new Database()
  }
}
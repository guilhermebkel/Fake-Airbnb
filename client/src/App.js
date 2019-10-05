import React, { Component } from 'react'

import Api from './services/Api'

import './App.css'

import Logo from './assets/logo.svg'

class App extends Component {
  state = {
    email: ''
  }
  
  async handleSubmit(event){
    event.preventDefault()

    const response = await Api.post('/sessions', { email: this.state.email })
  }

  render(){
    return (
      <div className="container">
        <img src={Logo} alt="" />
  
        <div className="content">
          <p>
            Show <strong>spots</strong> for developers
            and find <strong>talents</strong> for your brand.
          </p>
  
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Type your email..."
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <button stype="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

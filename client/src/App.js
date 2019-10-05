import React from 'react'
import './App.css'

import Logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={Logo} alt="" />

      <div className="content">
        <p>
          Show <strong>spots</strong> for developers
          and find <strong>talents</strong> for your brand.
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Type your email..."
          />
          <button stype="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default App

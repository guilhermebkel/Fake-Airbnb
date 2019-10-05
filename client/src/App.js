import React, { Component } from 'react'

import Routes from './routes'
import './App.css'
import Logo from './assets/logo.svg'

function App() {
	return (
		<div className="container">
			<img src={Logo} alt="" />

			<div className="content">
				<Routes />
			</div>
		</div>
	)
}

export default App

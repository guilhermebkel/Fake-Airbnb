import React, { Component } from 'react'
import Api from '../../services/Api'

export default class Login extends Component {
    state = {
        email: ''
    }
      
    handleSubmit = async event => {
        event.preventDefault()
        const { data: { success, error, data }} = await Api.post('/sessions', { email: this.state.email })
        
        if (success) return localStorage.setItem('user', data._id)
    
        return alert(error)
    }

    render(){
        return(
            <>
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
            </>
        )
    }
}
import React, { Component } from 'react'
import Api from '../../services/Api'

import './styles.css'

export default class Dashboard extends Component {
    state = {
        spots: []
    }

    componentDidMount(){
        this.loadSpots()
    }
    
    loadSpots = async () => {
        const user_id = localStorage.getItem('user')
        const { data: { success, error, data }} = await Api.get('/dashboard', { 
            headers: { user_id }
        })

        if (success) return this.setState({ spots: data })

        return alert(error)
    }

    render(){
        return(
            <ul className="spot-list">
                {
                    this.state.spots.map(spot => (
                        <li key={spot._id}>
                            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                            <strong>{spot.company}</strong>
                            <span>{spot.price ? `R$${spot.price}/dia` : 'FREE'}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
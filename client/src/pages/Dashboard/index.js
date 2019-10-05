import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <>
                <ul className="spot-list">
                    {
                        this.state.spots.map(spot => (
                            <li key={spot._id}>
                                <img src={spot.thumbnail_url} alt="" />
                                <strong>{spot.company}</strong>
                                <span>{spot.price ? `R$${spot.price}/dia` : 'FREE'}</span>
                            </li>
                        ))
                    }
                </ul>
                <Link to="/new">
                    <button className="btn">Create new spot</button>
                </Link>
            </>
        )
    }
}
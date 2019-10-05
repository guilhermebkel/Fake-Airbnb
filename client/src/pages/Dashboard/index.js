import React, { Component } from 'react'
import Api from '../../services/Api'

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
        console.log(data)
        if (success) return this.setState({ spots: data })

        return alert(error)
    }

    render(){
        return(
            <ul className="spot-list">
                {
                    this.state.spots.map(spot => (
                        <li key={spot._id}>
                            <header />
                            <strong>{spot.company}</strong>
                            <span>{spot.price}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
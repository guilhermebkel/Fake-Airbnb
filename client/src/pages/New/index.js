import React, { Component } from 'react'

import Api from '../../services/Api'

import Camera from '../../assets/camera.svg'

import './styles.css'

export default class New extends Component {
    state = {
        company: '',
        techs: '',
        price: '',
        thumbnail: null,
        preview: ''
    }

    handleChange = async value => {
        this.setState({
            thumbnail: value,
            preview: value ? URL.createObjectURL(value) : null
        })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const user_id = localStorage.getItem('user')
        const formData = new FormData()

        formData.append('thumbnail', this.state.thumbnail)
        formData.append('company', this.state.company)
        formData.append('techs', this.state.techs)
        formData.append('price', this.state.price)
        
        const { data: { success, error }} = await Api.post('/spots', formData, {
            headers: { user_id }
        })
    
        if (success) return this.props.history.push('/dashboard')
    
        return alert(error)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label 
                    id="thumbnail"
                    style={{ backgroundImage: `url(${this.state.preview})`}}
                    className={this.state.thumbnail ? 'has-thumbnail' : ''}
                >
                    <input 
                        type="file" 
                        onChange={event => this.handleChange(event.target.files[0])}
                    />
                    <img src={Camera} alt="" />
                </label>

                <label htmlFor="company">BRAND *</label>
                <input
                    id="company"
                    placeholder="Your brand name..."
                    value={this.state.company}
                    onChange={event => this.setState({ company: event.target.value })}
                />

                <label htmlFor="techs">TECHNOLOGIES * <span>(comma separated)</span></label>
                <input
                    id="techs"
                    placeholder="Used technologies ..."
                    value={this.state.techs}
                    onChange={event => this.setState({ techs: event.target.value })}
                />

                <label htmlFor="price">DIARY INCOME * <span>(blank for free income)</span></label>
                <input
                    id="price"
                    placeholder="Diary income ..."
                    value={this.state.price}
                    onChange={event => this.setState({ price: event.target.value })}
                />

                <button type="submit" className="btn">Create</button>
            </form>
        )
    }
}
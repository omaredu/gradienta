import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight as gradArrow } from '@fortawesome/free-solid-svg-icons'

import './css/Gradient.css'
import Colora from './Colora';

export default class Gradient extends Component {

    state = {
        likes: this.props.likes,
        clicked: false
    }

    pushLike = id => {
        if (!this.findLike(id)) {
            if (!this.state.clicked) {
                this.setState({ likes: this.state.likes + 1 })
                this.setState({ clicked: true })
                this.props.pushLocal(id)
            } 
        } else {
            this.setState({ likes: this.state.likes - 1 })
            this.setState({ clicked: false })
            this.props.deleteLocal(id)
        }
        
    }

    findLike = id => {
        var likesTotal = JSON.parse("[" + localStorage.getItem('liked') + "]")
        var res = likesTotal.find(like => {
            if (like === id){
                return true
            } else {
                return false
            }
        })

        return res
    }

    render() {
        return (
            <div className="gradient" style={{ boxShadow: '0 0 1.5em rgba(0,0,0,0.08)', height: '20em', width: '20em', margin: "2em"}}>
                <div className="gradient" style={
                    { background: `linear-gradient(155deg , ${this.props.colorOne}, ${this.props.colorTwo})`, height: "15em", width: "100%"}
                    }></div>
                <div className="content">
                    <ul className="coloraReel">
                        <li><Colora colora={this.props.colorOne} /></li>
                        <li><FontAwesomeIcon style={gradientArrow} size="xs" icon={gradArrow}/></li>
                        <li><Colora colora={this.props.colorTwo} /></li>
                    </ul>
                    <label className="likesCounter">{this.state.likes}</label>
                    <FontAwesomeIcon 
                    icon={solidHeart} 
                    size="lg" 
                    className="like"
                    onClick={() => this.pushLike(this.props.idgrad)} 
                    color={this.findLike(this.props.idgrad) ? "#e41749" : "#c9c9c9"}
                    style={{float: 'right', margin: '1.5em ', cursor: 'pointer'}}/>
                </div>
            </div>
        )
    }
}

const gradientArrow = {
    margin: '1em  .5em 0 .5em',
    color: '#9e9e9e'
}
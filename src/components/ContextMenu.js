import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './css/ContextMenu.css'

export default class ContextMenu extends Component {
    openInstagram = () => {
        var win = window.open('https://www.instagram.com', '_blank');
        win.focus();
    }

    render() {
        if (this.props.show) {
            return (
                <div>
                    <ul className="contextMenu">
                        <Link style={{textDecoration: 'none'}} to="/home"><li>Home</li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/favorite"><li>Favorite Gradients</li></Link>
                        <Link style={{textDecoration: 'none'}} to="/create"><li>Create Gradient</li></Link>
                        {/* <li onClick={this.openInstagram}>Instagram</li> */}
                    </ul>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
}

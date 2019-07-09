import React, { Component } from 'react'
import { ReactComponent as Logo } from './icon.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge as menuIcon } from '@fortawesome/free-solid-svg-icons'

import './css/Header.css'
import ContextMenu from './ContextMenu';

export default class Header extends Component {

    state = {
        contextShow: false
    }

    startContext() {
        this.setState({contextShow: !this.state.contextShow})
    }

    render() {
        return (
            <div>
                <div className="header" style={headerStyle}>
                    <div style={{textAlign: 'center'}}>
                        <Logo height="25px" style={iconStyle} />
                    </div>
                    <FontAwesomeIcon
                        className="menuIcon"
                        icon={menuIcon}
                        size="lg"
                        color={!this.state.contextShow ? "#c9c9c9" : "#212121"}
                        style={menuIconStyle}
                        onClick={this.startContext.bind(this)}
                    />
                </div>

                <ContextMenu show={this.state.contextShow}/>

                <div style={{height: '4.5em'}}></div>
            </div>
        )
    }
}

const iconStyle = {
    margin: "1.5em 0 1.5em 0"
}

const menuIconStyle = {
    position: 'absolute',
    right: '2em',
    top: '1.25em',
    cursor: 'pointer'
}

const headerStyle = {
    width: "100%",
    boxShadow: '0 0 1.5em rgba(0,0,0,0.07)',
    position: 'fixed',
    zIndex: '10',
    backgroundColor: 'white'
}

import React, { Component } from 'react'
import Clipboard from 'react-clipboard.js'

import './css/Colora.css'
import Toast from './Toast';

export default class Colora extends Component {
    state = {
        hover: false,
        clicked: false
    }

    onHover = () => {
        this.setState({hover: !this.state.hover})
        if (!this.state.hover) {
            this.setState({ clicked: false })
        }
    }

    render() {
        const colora = this.props.colora

        return (
            <div className="coloraGeneral">
                { this.state.hover? <Toast value={this.state.clicked ? "Copied!" : "Copy"} start={this.state.hover}/> : <div/>}
                <Clipboard className="clipboard" data-clipboard-text={colora}>
                        <div className="colorContainer" 
                        style={{ backgroundColor: hex2Rgba(colora, 0.2) }} 
                        onMouseEnter={this.onHover} 
                        onMouseLeave={this.onHover} 
                        onClick={() => this.setState({clicked: true})}>
                        <div className="colorShow" style={{ backgroundColor: colora }} />
                        <label className="colorText">{colora}</label>
                    </div>
                </Clipboard>
            </div>
        )
    }
}

function hex2Rgba(hex, opacity) {  //codigo de subodhghulaxe en https://jsfiddle.net/subodhghulaxe/t568u/
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
    return result;
}


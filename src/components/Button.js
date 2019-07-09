import React, { Component } from 'react'

import './css/Button.css'

export default class Button extends Component {
    render() {
        return (
            <div className="buttonColora">
                {this.props.value}
            </div>
        )
    }
}

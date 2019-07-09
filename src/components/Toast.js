import React, { Component } from 'react'

import './css/Toast.css'

export default class Toast extends Component {
    render() {
        return (
            <div>
                <div className="colorToast" style={ 
                    {
                        position: 'absolute',
                        padding: '10px',
                        color: 'white',
                        fontSize: '.8em',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '5px',
                        width: 'auto',
                        cursor: 'default',
                        transition: '.15s',
                        opacity: this.props.start ? '1' : '0',
                        top: '3em'
                    }

                }>
                    <p>{this.props.value}</p>
                </div>
            </div>
        )
    }
}
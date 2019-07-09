import React, { Component } from 'react'

import ColorPreview from './ColorPreview'
import { BlockPicker } from 'react-color'

import './css/Editor.css'
import Button from './Button';

const apiUrl = "http://gradienta.herokuapp.com/api/gradient"

export default class Editor extends Component {
    state = {
        actualColorSample: "#FEE140",
        actualColor: 1,
        colorOne: "#FEE140",
        colorTwo: "#FA709A"
    }

    cambioColor = color => {
        if (this.state.actualColor === 1){
            this.setState({colorOne: color.hex})
        }  
        if (this.state.actualColor === 2){
            this.setState({colorTwo: color.hex})
        }
    }

    uploadGradient = (colorOne, colorTwo) => {
        fetch(apiUrl, { method: 'post', headers: { "Content-type": "application/json" }, body: `{"colorOne": "${colorOne}", "colorTwo": "${colorTwo}"}` })
    }

    render() {
        return (
            <div style={{display: 'block', width: '50vh', height: '10vw', margin: '10vh auto auto auto' }}>
                <div>
                    <ul className="generalContainer">
                        <li>
                            <div className="editorSample"
                                style={{
                                    background: `linear-gradient(155deg , ${this.state.colorOne}, ${this.state.colorTwo})`,
                                    height: '30em',
                                    width: '20em',
                                    boxShadow: `0 0 1em rgba(0,0,0,0.15)`
                                }}
                            />
                        </li>
                        <li>
                            <div className="previewContainer">
                                {/* eslint-disable-next-line*/}
                                <a onClick={() => this.setState({ actualColor: 1 })}><ColorPreview active={this.state.actualColor === 1} preview={this.state.colorOne} /></a>
                                {/* eslint-disable-next-line*/}
                                <a onClick={() => this.setState({ actualColor: 2 })}><ColorPreview active={this.state.actualColor === 2} preview={this.state.colorTwo} /></a>
                                
                                <BlockPicker colors={["#f44336",
                                    "#e91e63",
                                    "#9c27b0",
                                    "#673ab7",
                                    "#3f51b5",
                                    "#2196f3",
                                    "#03a9f4",
                                    "#00bcd4",
                                    "#009688",
                                    "#4caf50",
                                    "#8bc34a",
                                    "#cddc39",
                                    "#ffeb3b",
                                    "#ffc107",
                                    this.state.actualColorSample
                                ]} 
                                color={this.state.actualColor === 1 ? this.state.colorOne : this.state.colorTwo} 
                                onChange={this.cambioColor} 
                                triangle="hide" />

                                <input id="customColora" 
                                placeholder="Example: #fa709a" 
                                style={{
                                    padding: '.6em',
                                    width: '11em',
                                    border: 'none',
                                    transition: '.3s',
                                    borderBottom: `2px solid ${this.state.actualColor === 1 ? this.state.colorOne : this.state.colorTwo}`
                                }}
                                onChange={() => 
                                {
                                    this.setState({actualColorSample: document.getElementById('customColora').value})
                                }} />
                            </div>
                        </li>
                    </ul>
                    <a href="/home" onClick={() => this.uploadGradient(this.state.colorOne, this.state.colorTwo)}><Button value="Ready!" /></a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}
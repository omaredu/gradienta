import React, { Component } from 'react'

import './css/ColorPreview.css'

export default class ColorPreview extends Component {
    render() {
        return (
            <div className="colorPreviewBack" style={{backgroundColor: hex2Rgba(this.props.preview, 0.2)}}>
                <div className={!this.props.active ? "colorPreviewMini" : "colorPreviewMiniSelect"} style={{backgroundColor: this.props.preview}}/>
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


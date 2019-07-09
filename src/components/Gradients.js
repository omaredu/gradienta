import React, { Component } from 'react'
import Masonry from 'masonry-layout'

//Components
import Gradient from './Gradient'
//import gradients from './test/gradients.json'

const apiUrl = "http://gradienta.herokuapp.com/api/gradient"

export default class Gradients extends Component {

    state = {
        gradients: []
    }
    
    async componentDidMount() {
        const res = await fetch(apiUrl)
        const data = await res.json()
        this.setState({gradients: data})

        // eslint-disable-next-line
        var layoutMasonry = await new Masonry('.gradients', {
            //Opciones de Grid
        })
    }

    pushLocal = (id) => {
        var likedId = JSON.parse("[" + localStorage.getItem('liked') + "]")
        likedId.push(id)
        localStorage.setItem('liked', likedId)
        //console.log(localStorage.getItem('liked'))
        fetch(apiUrl + "/" + id + "/" + 1, {method: 'put'})
    }

    deleteLocal = id => {
        var likedId = JSON.parse("[" + localStorage.getItem('liked') + "]")
        var filteredLike = likedId.filter(like => like !== id)
        localStorage.setItem('liked', filteredLike)
        //console.log(localStorage.getItem('liked'))
        fetch(apiUrl + "/" + id + "/" + 2, { method: 'put' })
    }

    findLike = id => {
        var likesTotal = JSON.parse("[" + localStorage.getItem('liked') + "]")
        var res = likesTotal.find(like => {
            if (like === id) {
                return true
            } else {
                return false
            }
        })

        return res
    }
    
    render() {
        const gradients = this.state.gradients;

        if(!localStorage.getItem('liked')) {
            localStorage.setItem('liked', [])
        }
        return (
            <div>
                <center>
                    <div className="gradients" style={{ width: '80vw' }}>
                    {!this.props.loves ?
                        gradients.map(gradient => <Gradient idgrad={gradient._id} deleteLocal={this.deleteLocal} pushLocal={this.pushLocal} likes={gradient.loves} key={gradient._id} colorOne={gradient.colorOne.toUpperCase()} colorTwo={gradient.colorTwo.toUpperCase()} />)
                    :
                    // eslint-disable-next-line
                        gradients.map(gradient => {
                            if (this.findLike(gradient._id)){
                                return <Gradient idgrad={gradient._id} deleteLocal={this.deleteLocal} pushLocal={this.pushLocal} likes={gradient.loves} key={gradient._id} colorOne={gradient.colorOne.toUpperCase()} colorTwo={gradient.colorTwo.toUpperCase()}/>
                            }
                        })
                    }
                    </div>
                </center>
            </div>
        )
    }
    
}


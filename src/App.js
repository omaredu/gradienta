import React from 'react';
import './App.css';
import Favicon from 'react-favicon'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//Componentes
import Header from './components/Header'
import Gradients from './components/Gradients'

import './index.css'
import Editor from './components/Editor'

import favicon from './favicon.ico'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Favicon url={favicon} />
        <Router>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Gradients} />
          <Route exact path="/home" component={Gradients} />
          <Route exact path="/create" component={Editor} />
          <Route exact path="/favorite" component={() => <Gradients loves={true} />} />
          <Route exact path="/favorites" component={() => <Gradients loves={true} />} />
        </Router>
      </div>
    )
  }
}


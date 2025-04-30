import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import Navbar from "./components/Navbar.jsx"
import NewsComponent from "./components/NewComponent.jsx"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsComponent/>
      </div>
    )
  }
}



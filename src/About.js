/*
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React, { Component } from 'react'
import {
  CardColumns,
  Container } from 'reactstrap'
import {
  NavBar,
  NavBarItem
 } from 'worldwind-react-globe-bs4'

import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 34.2,
      lon: -119.2,
      alt: 10e6,
      globe: null
    }

    this.globeRef = React.createRef()
    this.layersRef = React.createRef()
    this.markersRef = React.createRef()
    this.settingsRef = React.createRef()
  }

  componentDidMount() {
    // Get the component with the WorldWindow after mounting
    this.setState()
  }

  render() {

    const navbarItems = [
      <NavBarItem key='lyr' title='Home' icon='home' collapse={this.layersRef.current}/>
    ]

    return (
      <div>
        <NavBar
            logo=''
            title='Earth Eye'
            href='https://github.com/observers-nasa/eartheye'
            items={navbarItems} />
        <Container fluid className='p-0'>
          <div className='overlayCards noninteractive'>
            <CardColumns>
            </CardColumns>
          </div>
        </Container>
      </div>
    )
  }
}

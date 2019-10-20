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
  NavBar
 } from 'worldwind-react-globe-bs4'

import { NavLink} from 'reactstrap';

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
        <NavLink icon='globe' href="/globe">Navegar no Globo</NavLink>
    ]

    const navbarSobre = <NavLink href="/about">Sobre</NavLink>

    return (
      <div>
        <NavBar
            logo='/images/earth_eye_logo.png'
            title=''
            href='https://observers-nasa.github.io/eartheye'
            items={navbarItems}
            search={navbarSobre} />
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

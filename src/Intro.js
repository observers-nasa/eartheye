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

import { Link } from 'react-router-dom'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
            logo=''
            title='Earth Eye'
            href='https://github.com/observers-nasa/eartheye'
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

/*
 * Copyright (c) 2018 Bruce Schubert.
 * The MIT License
 * http://www.opensource.org/licenses/mit-license
 */
import React, { Component } from 'react'
import Globe from 'worldwind-react-globe'
import {
  CardColumns,
  Container } from 'reactstrap'
import {
  LayersCard,
  MarkersCard,
  NavBar,
  NavBarItem,
  SearchBox,
  SettingsCard,
  Tools } from 'worldwind-react-globe-bs4'

import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lat: 23.54,
      lon: 46.74,
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
    this.setState({globe: this.globeRef.current})
  }

  render() {

    const globe = this.globeRef.current

    const layers = [
      {layer: 'blue-marble', options: {category: 'base', enabled: false}},
      {layer: 'blue-marble-landsat', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2', options: {category: 'base', enabled: false}},
      {layer: 'eox-sentinal2-labels', options: {category: 'base', enabled: true}},
      {layer: 'eox-openstreetmap', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'renderables', options: {category: 'data', enabled: true, displayName: 'Marcadores'}},
      {layer: 'compass', options: {category: 'setting', enabled: false}},
      {layer: 'coordinates', options: {category: 'setting', enabled: true}},
      {layer: 'view-controls', options: {category: 'setting', enabled: true}},
      {layer: 'stars', options: {category: 'setting', enabled: false}},
      {layer: 'atmosphere-day-night', options: {category: 'setting', enabled: true}}
    ]

    const navbarItems = [
      <NavBarItem key='lyr' title='Camadas' icon='list' collapse={this.layersRef.current}/>,
      <NavBarItem key='mkr' title='Marcadores' icon='map-marker' collapse={this.markersRef.current}/>,
      <NavBarItem key='set' title='Configurações' icon='cog' collapse={this.settingsRef.current}/>
    ]

    const navbarSearch = <SearchBox title='Buscar' globe={globe} mapQuestApiKey='RGjBGWTuNwyYrQTsCZJZvZVoFanFizt5'/>

    return (
      <div>
        <NavBar
            logo='/images/earth_eye_logo.png'
            title=''
            href='https://observers-nasa.github.io/eartheye'
            items={navbarItems}
            search={navbarSearch} />
        <Container fluid className='p-0'>
          <div className='globe'>
              <Globe
                ref={this.globeRef}
                layers={layers}
                latitude={-23.5411354}
                longitude={-46.7361999}
                altitude={3000}/>
          </div>
          <div className='overlayTools noninteractive'>
              <Tools
                globe={globe}
                markers={this.markersRef.current}
                markersLayerName='Marcadores'/>
          </div>
          <div className='overlayCards noninteractive'>
            <CardColumns>
              <LayersCard
                ref={this.layersRef}
                categories={['overlay', 'base']}
                globe={globe} />
              <MarkersCard
                ref={this.markersRef}
                globe={globe}
                markersLayerName='Marcadores' />
              <SettingsCard
                ref={this.settingsRef}
                categories={['setting']}
                globe={globe} />
            </CardColumns>
          </div>
        </Container>
      </div>
    )
  }
}

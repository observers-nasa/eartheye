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
    this.setState({globe: this.globeRef.current})
  }

  render() {

    const globe = this.globeRef.current

    const layers = [
      {layer: 'blue-marble', options: {category: 'base', enabled: true}},
      {layer: 'blue-marble-landsat', options: {category: 'base', enabled: false}},
      {layer: 'bing-aerial', options: {category: 'base', enabled: false}},
      {layer: 'bing-aerial-labels', options: {category: 'base', enabled: false}},
      {layer: 'eox-openstreetmap', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'bing-roads', options: {category: 'overlay', enabled: false, opacity: 0.8}},
      {layer: 'renderables', options: {category: 'data', enabled: true, displayName: 'Marcadores'}},
      {layer: 'compass', options: {category: 'setting', enabled: false}},
      {layer: 'coordinates', options: {category: 'setting', enabled: true}},
      {layer: 'view-controls', options: {category: 'setting', enabled: true}},
      {layer: 'stars', options: {category: 'setting', enabled: false}},
      {layer: 'atmosphere-day-night', options: {category: 'setting', enabled: false}}
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
            logo=''
            title='Earth Eye'
            href='https://github.com/observers-nasa/eartheye'
            items={navbarItems}
            search={navbarSearch} />
        <Container fluid className='p-0'>
          <div className='globe'>
              <Globe
                ref={this.globeRef}
                layers={layers}/>
          </div>
          <div className='overlayTools noninteractive'>
              <Tools
                globe={globe}
                markers={this.markersRef.current}
                markersLayerName='Camadas'/>
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

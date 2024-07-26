import React, { Component } from 'react'

import './google-map.styles.css';

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
  return (
    <div className='map-container'>
      <Map
      google = {this.props.google}
      style = {{width:'300px', height: '275px'}}
      className='mapContainerWrapper'
      zoom= {13}
      initialCenter = {
          {
              lat:-33.9302,
              lng: 18.8449
          }
      }
      >
      <Marker className="mapContainerMarker" position={{ lat: -33.9302, lng: 18.8449}} />
      </Map>
    </div>
  )
}
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyDnMCLvNdofTgIHJMpyQn9gJ2KgV9aMCX8"
})(GoogleMap);


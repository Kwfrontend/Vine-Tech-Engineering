import React, { Component } from 'react'

import './google-map.styles.css';

import {Map, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  render() {
  return (
    <Map
    google = {this.props.google}
    style = {{width:'500px', height: '250px'}}
    zoom= {12}
    initialCenter = {
        {
            lat:-34.109600,
            lng: 18.837830
        }
    }
    />
  )
}
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyDnMCLvNdofTgIHJMpyQn9gJ2KgV9aMCX8"
})(GoogleMap);


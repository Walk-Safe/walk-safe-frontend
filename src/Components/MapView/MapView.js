import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '40%'
};

export class MapView extends Component {
  render() {
    return (
      <div className='map-container'>
        <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={
              {
                lat: 39.747620,
                lng: -104.955661
              }
            }
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDweAuIohkVmSN7rYmcZltu9r_yuMzFzqg'
})(MapView);


// google map api test key - AIzaSyDweAuIohkVmSN7rYmcZltu9r_yuMzFzqg

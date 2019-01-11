import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  onMarkerClick() {
    console.log('ALEX clicked');
  }

  onInfoWindowClose() {
    console.log('ALEX Closed');
  }

  render() {
    return (
      <div className="map-container">
        <Map google={this.props.google} zoom={12}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>ALEX</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAHXuH_BpIAxC29eFFA5L6cg8yx8JiZfgs'
})(MapContainer);

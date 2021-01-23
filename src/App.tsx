import React from 'react';
import L from 'leaflet';
// @ts-ignore
import markerPNG from './configs/image/marker.png';
import { observer } from 'mobx-react';
import { HOST } from './configs/consts';
import { appState } from './state/appState';
import { SideBar } from './components/side-bar/SideBar';
import { PositionType, AppStateType } from 'configs/types';

const state = new appState();
export const App = observer( class extends React.Component {
  state:AppStateType = { app: null };

  componentDidMount () {
    this.state.app = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.state.app);

    fetch(HOST)
      .then(response => response.json())
      .then(data => {
        state.setPosition(data);
        // @ts-ignore
        data.forEach(item => {
          let LeafIcon = L.icon({
            iconUrl: markerPNG,
            iconSize:     [35, 35],
            iconAnchor:   [5, 5],
            popupAnchor:  [5, 0]
          });

          L.marker([item.latitude, item.longitude], {icon: LeafIcon})
            .bindPopup(`<p>Объект #${item.id}: ${item.name}</p>`)
            .addTo(this.state.app);
        });
      })
      .catch(err => console.log('Fetch error: ', err));
  }

  transitionMapHandler = (position:PositionType):void => {
    this.state.app.setView([position.latitude, position.longitude], 12);
  };

  render () {
    return (
      <>
        <div style={{ height:'100vh' }} id="map"></div>
        <SideBar position={ state.position } handler={ this.transitionMapHandler } />
      </>
    );
  }
});
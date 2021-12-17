import { Component, OnInit } from '@angular/core';
import {  icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet-maps',
  templateUrl: './leaflet-maps.component.html',
  styleUrls: ['./leaflet-maps.component.scss']
})
export class LeafletMapsComponent {

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  // Marker for the top of Mt. Ranier
  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: './assets/marker-icon.png',
      iconRetinaUrl: './assets/marker-icon-2x.png',
      shadowUrl: './assets/marker-shadow.png'
    })
    
  });
  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
    }
  };

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [ this.streetMaps, this.summit ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

}

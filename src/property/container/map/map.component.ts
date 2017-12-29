
import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
  constructor() {}
  ngOnInit() {
    const markers = [
      {
          'title': 'Pune',
          'lat': '18.523600',
          'lng': '73.847800',
          'description': 'Pune is the seventh largest metropolis in India, the second largest in the state of Maharashtra after Mumbai.'
      }
  ];
  window.onload = function () {
      const mapOptions = {
          center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      const infoWindow = new google.maps.InfoWindow();
      const latlngbounds = new google.maps.LatLngBounds();
      // tslint:disable-next-line:no-var-keyword
      var geocoder = geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
      for (let i = 0; i < markers.length; i++) {
          const data = markers[i];
          const myLatlng = new google.maps.LatLng(data.lat, data.lng);
          const marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: data.title,
              draggable: true,
              animation: google.maps.Animation.DROP
          });
          // tslint:disable-next-line:no-shadowed-variable
          (function (marker, data) {
              google.maps.event.addListener(marker, 'click', function (e) {
                  infoWindow.setContent(data.description);
                  infoWindow.open(map, marker);
              });
              google.maps.event.addListener(marker, 'dragend', function (e) {
                  let lat, lng, address;
                  geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
                      if (status === google.maps.GeocoderStatus.OK) {
                          lat = marker.getPosition().lat();
                          lng = marker.getPosition().lng();
                          address = results[0].formatted_address;
                          alert('Latitude: ' + lat + '\nLongitude: ' + lng + '\nAddress: ' + address);
                      }
                  });
              });
          })(marker, data);
          latlngbounds.extend(marker.position);
      }
      const bounds = new google.maps.LatLngBounds();
      map.setCenter(latlngbounds.getCenter());
      map.fitBounds(latlngbounds);
  };
  }
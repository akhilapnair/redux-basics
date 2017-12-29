
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
      const mapProp = {
          center: new google.maps.LatLng(51.508742, -0.120850),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  }
}



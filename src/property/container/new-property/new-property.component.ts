import { Component, Inject , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyListComponent } from '../property-list/propertylist.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromproperty from '../../store/action/property.action';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as  fromAction from '../../store/action/property.action';

@Component({
    selector: 'app-property',
    templateUrl: './new-property.component.html',
    styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit  {
    propertyForm: FormGroup;
    data$: Observable<any>;
      constructor( private formBuilder: FormBuilder, private store: Store<any>) {}
      ngOnInit() {
        this.propertyForm = this.formBuilder.group({
            propertyname: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            // image: ['', Validators.required],
            address: this.formBuilder.group({
              street: ['', Validators.required],
              zip: ['', Validators.required],
              city: ['', Validators.required]
            })
          });
    const markers = [
      {
          'title': 'Trivandrum',
          'lat': '8.5241',
          'lng': '76.9366',
          'description': 'TVM'
      }
  ];
  // this.store.dispatch(new fromAction.UpdateLocation({'lat': '8.5241',
  // 'lng': '76.9366' }));
  window.onload = function () {
      const mapOptions = {
          center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        //   zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      const infoWindow = new google.maps.InfoWindow();
      const latlngbounds = new google.maps.LatLngBounds();
      // tslint:disable-next-line:no-var-keyword
      var geocoder = geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
    //   map.setZoom(12);
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
                          //  this.propertyForm.controls['propertyname'].patchValue(address);
                          // this.propertyForm.patchValue({
                          // propertyname: address
                          // });
                            // this.propertyForm.patchValue({'street': address});
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
     this.data$ = this.store.select<any>('property');
  }
   getData(data: any) {
     console.log('DATA : ', data);
     this.store.dispatch({
      type: fromproperty.CREATE_PROPERTY,
      payload: data
     });
   }

}

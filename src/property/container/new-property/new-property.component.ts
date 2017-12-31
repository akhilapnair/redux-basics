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

import { Component, Inject , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PropertyListComponent } from '../property-list/propertylist.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fromproperty from '../../store/action/property.action';
import { Store} from '@ngrx/store';

@Component({
    selector: 'app-add',
    templateUrl: './propertyadd.component.html',
    styleUrls: ['./propertyadd.component.css']
})
export class PropertyAddComponent implements OnInit  {
    propertyForm: FormGroup;
      constructor(private formBuilder: FormBuilder, private store: Store<any>) {}
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
      }
   getData(data: any) {
     console.log(data);
     this.store.dispatch({
      type: fromproperty.LOAD_PROPERTY,
      payload: data
     });
   }

}

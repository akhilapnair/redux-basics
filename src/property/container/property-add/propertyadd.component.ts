import { Component, Inject , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PropertyListComponent } from '../property-list/propertylist.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-add',
    templateUrl: './propertyadd.component.html',
    styleUrls: ['./propertyadd.component.css']
})
export class PropertyAddComponent implements OnInit  {
    propertyForm: FormGroup;
      constructor(private formBuilder: FormBuilder) {}
      ngOnInit() {
        this.propertyForm = this.formBuilder.group({
            propertyname: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            image: ['', Validators.required],
            address: this.formBuilder.group({
              street: [],
              zip: [],
              city: []
            })
          });
      }
    // constructor(public dialogRef: MatDialogRef<PropertyAddComponent>) { }

}

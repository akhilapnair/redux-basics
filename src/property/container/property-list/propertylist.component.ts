import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PropertyAddComponent } from '../property-add/propertyadd.component';
@Component({
    selector: 'app-list',
    templateUrl: './propertylist.component.html',
    styleUrls: ['./propertylist.component.css']
})
export class PropertyListComponent {
    propertyDialogRef: MatDialogRef<PropertyAddComponent>;
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
        this.propertyDialogRef = this.dialog.open(PropertyAddComponent,{
              width: '500px',
              height: '500px'
            });

      }
}

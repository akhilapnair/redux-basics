import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PropertyAddComponent } from '../property-add/propertyadd.component';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as  fromAction from '../../store/action/property.action';
import { PropertyService } from '../../service/property.service';
import { PropertyState } from '../../store/reducers/propertystate.reducer';
@Component({
    selector: 'app-list',
    templateUrl: './propertylist.component.html',
    styleUrls: ['./propertylist.component.css']
})
export class PropertyListComponent implements OnInit {
    data$: Observable<any>;
    propertyDialogRef: MatDialogRef<PropertyAddComponent>;
    constructor(public dialog: MatDialog, private store: Store<any>, private propertyservice: PropertyService) {}
    ngOnInit() {
        this.data$ = this.store.select<any>('property');
        console.log( this.data$);
        this.store.dispatch(new fromAction.LoadProperty());
    }
    openDialog(): void {
        this.propertyDialogRef = this.dialog.open(PropertyAddComponent, {
              width: '500px',
              height: '661px'
            });

      }
}

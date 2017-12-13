import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PropertyAddComponent } from '../property-add/propertyadd.component';
import * as fromStore from '../../store';
import { Store} from '@ngrx/store';
@Component({
    selector: 'app-list',
    templateUrl: './propertylist.component.html',
    styleUrls: ['./propertylist.component.css']
})
export class PropertyListComponent implements OnInit {
    propertyDialogRef: MatDialogRef<PropertyAddComponent>;
    constructor(public dialog: MatDialog, private store: Store<fromStore.ProductState>) {}
    ngOnInit() {
        // this.pizzas$ = this.store.select<any>(fromStore.getAllPizzas);
        this.store.select<any>('property').subscribe(
          state => console.log(state)
        );
      }
    openDialog(): void {
        this.propertyDialogRef = this.dialog.open(PropertyAddComponent, {
              width: '500px',
              height: '500px'
            });

      }
}

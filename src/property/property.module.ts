import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { PropertyListComponent } from './propertylist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatDialog, MatDialogRef } from '@angular/material';
import { PropertyAddComponent } from '../property/container/property-add/propertyadd.component';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import * as fromContainer from './container';
import * as fromStore from './store';
import { reducers } from './store';
// import * as fromModel from './model';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainer.PropertyListComponent,
  }
];

@NgModule({
    imports: [
         CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        MatDialogModule,
        RouterModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('property', {reducers})
      // RouterModule.forRoot([{path: 'propertyadd'},
      // { path: '', redirectTo : 'propertylist', pathMatch: 'full' },
      // { path: '**', redirectTo : 'propertylist', pathMatch: 'full' }]),
    ],
    // providers: [...fromServices.services],
    declarations: [...fromContainer.containers],
    exports: [...fromContainer.containers],
    entryComponents: [ PropertyAddComponent ],
    bootstrap: []
  })
  export class PropertyModule { }

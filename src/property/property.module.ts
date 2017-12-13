import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import * as fromContainer from './container';
import { reducers } from './store';
import * as fromModel from './model/property.model';
import { PropertyAddComponent } from './container/property-add/propertyadd.component';
import { PropertyListComponent } from './container/property-list/propertylist.component';

// routes
export const ROUTES: Routes = [
  {
    path: 'property',
    component: fromContainer.PropertyListComponent,
  },
  // {
  //   path: ':id',
  //   component: fromContainer.PropertyAddComponent,
  // },
  // {
  //   path: 'new',
  //   component: fromContainers.ProductItemComponent,
  // },
];
@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forChild(ROUTES),
      StoreModule.forFeature('property', reducers),
    ],
    // providers: [...fromServices.services],
    declarations: [...fromContainer.containers],
    exports: [...fromContainer.containers],
  })
  export class PropertyModule { }

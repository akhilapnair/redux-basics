import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
// import * as fromContainer from './container/property-list/propertylist.module';
// import *  { fromStore } from './store';
// import * as fromModel from './model';


@NgModule({
    imports: [
      BrowserModule,
      // StoreModule.forRoot({message: SimpleReducer}),
      RouterModule.forRoot([{path: 'propertyadd'},
      { path: '', redirectTo : 'propertylist', pathMatch: 'full' },
      { path: '**', redirectTo : 'propertylist', pathMatch: 'full' }]),
    //   StoreModule.forFeature(),
    ],
    declarations: [
      ],
    providers: [],
    bootstrap: []
  })
  export class PropertyModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
// import * as fromContainer from './container/property-list/propertylist.module';
import { reducers } from './store';
import * as fromModel from './model/property.model';
import { PropertyAddComponent } from './container/property-add/propertyadd.component';
import { PropertyListComponent } from './container/property-list/propertylist.component';


@NgModule({
    imports: [
      BrowserModule,
      // StoreModule.forRoot({message: SimpleReducer}),
      RouterModule.forRoot([{path: 'propertyadd'},
      { path: '', redirectTo : 'propertylist', pathMatch: 'full' },
      { path: '**', redirectTo : 'propertylist', pathMatch: 'full' }]),
      StoreModule.forFeature('proprty', reducers),
    ],
    declarations: [
      ],
    providers: [],
    bootstrap: []
  })
  export class PropertyModule { }

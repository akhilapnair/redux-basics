// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertyAddComponent } from '../property/container';
import { StoreModule } from '@ngrx/store';
// import { SimpleReducer } from './simple.reducer';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { PropertyListComponent } from './container/property-list/propertylist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'property' },
  {
    path: 'property',
    loadChildren: '../property/property.module#PropertyModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),

    StoreModule.forRoot({}),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

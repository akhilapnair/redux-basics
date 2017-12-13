import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as fromContainer from '../property/container';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'property' },
  {
    path: 'products',
    loadChildren: '../property/property.module#PropertyModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({message: SimpleReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

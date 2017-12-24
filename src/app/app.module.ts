// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertyAddComponent } from '../property/container';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { PropertyListComponent } from './container/property-list/propertylist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PropertyEffects } from '../property/store/effects/property.effect';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../property/container/map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { MapsAPILoader } from '@agm/core';
// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'property' },
  {
    path: 'property',
    loadChildren: '../property/property.module#PropertyModule',
  },
  { path: 'map', component: MapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz7hMuIrx7hJFT-eYXPM3T5E0MnjXzl8s'
    }),
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

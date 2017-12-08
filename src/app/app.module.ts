import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PropertyListModule } from './container/property-list/propertylist.module';
import { PropertyAddComponent } from './container/property-add/propertyadd.component';
// import { StoreModule } from '@ngrx/store';
// import { SimpleReducer } from './simple.reducer';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PropertyListComponent } from './container/property-list/propertylist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



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
    RouterModule.forRoot([{path: 'propertyadd', component: PropertyAddComponent},
    { path: '', redirectTo : 'propertylist', pathMatch: 'full' },
    { path: '**', redirectTo : 'propertylist', pathMatch: 'full' }]),
    PropertyListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatDialog, MatDialogRef } from '@angular/material';
import { PropertyAddComponent } from '../property/container/property-add/propertyadd.component';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducers/propertystate.reducer';
import * as fromContainer from './container';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PropertyService } from './service/property.service';
import { PropertyEffects } from '../property/store/effects/property.effect';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainer.PropertyListComponent,
  }
];

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatDialogModule,
        FlexLayoutModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('property', reducer),
        EffectsModule.forFeature([PropertyEffects])
      ],
    providers: [PropertyService],
    declarations: [...fromContainer.containers],
    exports: [...fromContainer.containers],
    entryComponents: [ PropertyAddComponent ],
    bootstrap: []

  })
  export class PropertyModule { }

import * as fromProperty from './propertystate.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ProductState {
    property: fromProperty.PropertyState;
}

export const reducers: ActionReducerMap<ProductState> =  { property: fromProperty.reducer };

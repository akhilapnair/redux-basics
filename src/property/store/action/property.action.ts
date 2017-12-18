// tslint:disable-next-line:eofline
import { Action } from '@ngrx/store';
import { Property } from '../../model/property.model';

export const LOAD_PROPERTY = ' load property';
export const LOAD_PROPERTY_SUCESS = 'load property sucess';
export const LOAD_PROPERTY_FAIL = ' load property fail';

export const CREATE_PROPERTY = ' create property';
export const CREATE_PROPERTY_SUCESS = 'create property sucess';
export const CREATE_PROPERTY_FAIL = ' create property fail';

export class LoadProperty implements Action {
readonly type = LOAD_PROPERTY;
constructor(public payload?: any) { }
}

export class LoadPropertyFail implements Action {
    readonly type = LOAD_PROPERTY_FAIL;
    constructor(public payload: any) {}
}

export class LoadPropertySucess implements Action {
    readonly type = LOAD_PROPERTY_SUCESS;
    constructor(public payload: any) {}
}
// Create Pizza


export class CreateProperty implements Action {
    readonly type = CREATE_PROPERTY;
    constructor(public payload?: any) { }
    }
export class CreatePropertyFail implements Action {
    readonly type = CREATE_PROPERTY_FAIL;
    constructor(public payload: any) {}
}
export class CreatePropertySucess implements Action {
    readonly type = CREATE_PROPERTY_SUCESS;
    constructor(public payload: any) {}
}
// action type
export type PropertyAction = | LoadProperty
                             | LoadPropertyFail
                             | LoadPropertySucess
                             | CreateProperty
                             | CreatePropertyFail
                             | CreatePropertySucess;

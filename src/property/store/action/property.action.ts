// tslint:disable-next-line:eofline
import { Action } from '@ngrx/store';
import { Property } from '../../model/property.model';

export const LOAD_PROPERTY = '[Products] load property';
export const LOAD_PROPERTY_SUCESS = '[Products] load property sucess';
export const LOAD_PROPERTY_FAIL = '[Products] load property fail';

// export class LoadProperty implements Action {
// readonly type = LOAD_PROPERTY;
// }

// export class LoadPropertyFail implements Action {
//     readonly type = LOAD_PROPERTY_FAIL;
//     constructor(public payload: any) {}
// }

// export class LoadPropertySucess implements Action {
//     readonly type = LOAD_PROPERTY_SUCESS;
//     constructor(public payload: any) {}
// }

// action type
// export type PropertyAction = LOAD_PROPERTY | LOAD_PROPERTY_SUCESS | LOAD_PROPERTY_FAIL;

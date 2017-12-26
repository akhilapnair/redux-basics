import * as fromproperty from '../action/property.action';
import { Property } from '../../model/property.model';
export interface PropertyState {
    data: Property[];
    loaded: boolean;
    loading: boolean;
    // loading: boolean;
}

export const initialState: PropertyState = {

    data: [],
    loaded: false,
    loading: false
};

export function reducer(state= initialState, action: any) {
    switch (action.type) {
        case fromproperty.LOAD_PROPERTY: {
            // console.log(action.payload ? 'NO' : 'YES');
            return {
                ...state,
                loading: true,
                loaded: false,
                data: action.payload
             };
        }

        case fromproperty.LOAD_PROPERTY_FAIL: {
            return {...state, loading: false, loaded: false,
                data: action.payload
                    };
        }

        case fromproperty.LOAD_PROPERTY_SUCESS: {
            return {
                ...state, loading: true, loaded: false,
                data: action.payload
             };
                }
        case fromproperty.CREATE_PROPERTY: {
            console.log('create property');
            return {
                ...state, loading: true, loaded: false,
                data: action.payload
             };
        }
        case fromproperty.CREATE_PROPERTY_SUCESS: {
            console.log('@create sucess');
            return {
                ...state, loading: true, loaded: false,
                data: action.payload
             };
        }
          case fromproperty.UPDATE_LOCATION: {
            // console.log(action.payload ? 'NO' : 'YES');
            return {
                ...state,
                loading: true,
                loaded: false,
                data: action.payload
             };
        }
        case fromproperty.UpdateLocationSucess: {
            // console.log(action.payload ? 'NO' : 'YES');
            return {
                ...state,
                loading: true,
                loaded: false,
                data: action.payload
             };
        }
        case fromproperty.UpdateLocationFail: {
            // console.log(action.payload ? 'NO' : 'YES');
            return {
                ...state,
                loading: true,
                loaded: false,
                data: action.payload
             };
        }


    }
    return state;

}
export const getProperty = (state: PropertyState) => state.data;

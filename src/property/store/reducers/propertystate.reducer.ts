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
            console.log(action.payload);
            return {
                ...state,
                data: action.payload
             };
        }

        case fromproperty.LOAD_PROPERTY_FAIL: {
            return {...state,
                    };
        }

        case fromproperty.LOAD_PROPERTY_SUCESS: {
            console.log(action.payload);
            return {...state, loading: false, loaded: true
                    };
                }
    }
    return state;

}
export const getProperty = (state: PropertyState) => state.data;

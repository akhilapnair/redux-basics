import * as fromproperty from '../action/property.action';
import { Property } from '../../model/property.model';
export interface PropertyState {
    data: Property[];
    // loaded: boolean;
    // loading: boolean;
}

export const initialState: PropertyState = {

    data: [
            ],
    // loaded: false,
    // loading: false
};

export function reducer(state= initialState, action) {
    switch (action.type) {
        case fromproperty.LOAD_PROPERTY: {
            return {...state
             };
        }

        case fromproperty.LOAD_PROPERTY_FAIL: {
            return {...state,
                    };
        }

        case fromproperty.LOAD_PROPERTY_SUCESS: {
            return {...state,
                    };
        }
    }
    return state;


}

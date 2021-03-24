import * as types from '../types';

import { INITIAL_STATE } from '../../store/state';

const CaregiverReducer = (state = INITIAL_STATE.caregiver, action) => {

    switch (action.type) {
        case types.ADD_CAREGIVER:
            return { ...state, [Object.keys(action.payload)]: Object.values(action.payload)[0] };
        default:

            return state;
    }
};

export default CaregiverReducer;

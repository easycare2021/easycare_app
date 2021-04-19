import * as types from '../types';

import { INITIAL_STATE } from '~/store/state';

const UserReducer = (state = INITIAL_STATE.user, action) => {

    switch (action.type) {
        case types.ADD_USER:

            return { ...state, [Object.keys(action.payload)]: Object.values(action.payload)[0] };
        default:

            return state;
    }
};

export default UserReducer;

import { combineReducers } from 'redux';

import UserReducer from './user';
import CaregiverReducer from './caregiver';

const reducers = combineReducers({
    user: UserReducer,
    caregiver: CaregiverReducer,
});

export default reducers;

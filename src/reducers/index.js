import { combineReducers } from 'redux';
import ReducerSelectUser from './reducer_select_user';
import ReducerFetchUsers from './reducer_fetch_users';

const rootReducer = combineReducers({
    user: ReducerSelectUser,
    users: ReducerFetchUsers
});

export default rootReducer;
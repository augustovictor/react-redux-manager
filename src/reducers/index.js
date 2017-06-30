import { combineReducers } from 'redux';
import ReducerSelectUser from './reducer_select_user';
import ReducerFetchUsers from './reducer_fetch_users';
import ReducerFetchProjects from './reducer_fetch_projects';

const rootReducer = combineReducers({
    user: ReducerSelectUser,
    users: ReducerFetchUsers,
    projects: ReducerFetchProjects
});

export default rootReducer;
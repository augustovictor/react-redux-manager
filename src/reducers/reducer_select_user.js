import { SELECT_USER } from '../actions';

export default (state = null, action) => {
    switch(action.type) {
        case SELECT_USER: {
            return action.payload;
        }
        
        default: return state;
    };
};
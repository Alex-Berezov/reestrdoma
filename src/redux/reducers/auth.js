import { SET_AUTH_DATA } from '../actions/auth';

const initialState = {
    isAuth: false,
    username: '',
    password: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData
            };
    
        default:
            return state;
    }
};

export default authReducer;
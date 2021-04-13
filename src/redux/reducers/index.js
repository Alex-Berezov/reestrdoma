import {combineReducers} from "redux";
import getCompaniesList from './getCompaniesList';
import auth from './auth';

const rootReducer = combineReducers({
    getCompaniesList,
    auth
});

export default rootReducer;
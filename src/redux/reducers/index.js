import {combineReducers} from "redux";

import auth from './auth';
import getCompaniesList from './getCompaniesList';
import getCompanyData from './getCompanyData';


const rootReducer = combineReducers({
    auth,
    getCompaniesList,
    getCompanyData
});

export default rootReducer;
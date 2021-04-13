import { GET_COMPANIES_LIST } from '../actions/getCompaniesList';

const initialState = {
    companiesList: []
};

const getCompaniesList = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES_LIST:
            return {
                ...state,
                companiesList: action.companies
            }
    
        default:
            return state;
    }
};

export default getCompaniesList;
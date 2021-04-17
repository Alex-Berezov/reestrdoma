import { 
    GET_COMPANY_DATA, 
    SET_COMPANY_ID, 
    SET_PAGE_NUMBER
} from '../actions/getCompanyData';

const initialState = {
    companyData: [],
    totalHousesCount: 0,
    companyId: 0,
    pageNumber: 1,
    rowsPerPage: 10
};

const getCompanyData = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_DATA:
            return {
                ...state,
                companyData: action.data.resData,
                totalHousesCount: action.data.totalHousesCount
            };
        case SET_COMPANY_ID:
            return {
                ...state,
                companyId: action.compatyId
            };
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            };
    
        default:
            return state;
    }
};

export default getCompanyData;
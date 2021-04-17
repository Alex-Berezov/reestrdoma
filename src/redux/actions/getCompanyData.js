export const GET_COMPANY_DATA = 'GET_COMPANY_DATA';
export const SET_COMPANY_ID = 'SET_COMPANY_ID';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const getCompanyData = (data) => ({
    type: GET_COMPANY_DATA,
    data
});

export const setCompatyId = (compatyId) => ({
    type: SET_COMPANY_ID,
    compatyId
});

export const setPageNumber = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber
});
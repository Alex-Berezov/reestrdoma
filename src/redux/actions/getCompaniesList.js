export const GET_COMPANIES_LIST = 'GET_COMPANIES_LIST';

export const getCompaniesList = (companies) => ({
    type: GET_COMPANIES_LIST,
    companies
});
import axios from 'axios';
import { setAuthData } from '../redux/actions/auth';
import { getCompaniesList } from '../redux/actions/getCompaniesList';
import { getCompanyData } from '../redux/actions/getCompanyData';

const apiUrl = 'http://test-alpha.reestrdoma.ru/api/';
var token = localStorage.getItem('accessToken');

const authRequest = axios.create({
    baseURL: apiUrl
});

const requestWithToken = axios.create({
    baseURL: apiUrl
});
requestWithToken.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export const authAPI = {
    login(username, password) {
        return authRequest.post(`login/`, { username, password });
    }
};
export const login = ({username, password}) => async (dispatch) => {
    const response = await authAPI.login(username, password);

    let accessToken = localStorage.setItem('accessToken', response.data.data.token.access);

    let isAccess = false;
    if (accessToken !== '') {
        isAccess = true;
    }

    if (response.data.success) {
        dispatch(setAuthData({
            "username": username,
            "password": password,
            "isAuth": isAccess
        }));
    }
};

export const getCompaniesListAPI = {
    getCompaniesList() {
        return requestWithToken.get(`reestrdoma/companies/`);
    }
};
export const getCompaniesListThunk = () => async (dispatch) => {
    const response = await getCompaniesListAPI.getCompaniesList();

    dispatch(getCompaniesList(response));
};


export const getCompanyDataAPI = {
    getCompanyData(company_id, page, perPage) {
        return requestWithToken.get(`reestrdoma/company/houses/${company_id}/?page=${page}&perPage=${perPage}`);
    }
};
export const getCompanyDataThunk = (company_id, page, perPage) => async (dispatch) => {
    const response = await getCompanyDataAPI.getCompanyData(company_id, page, perPage);

    const resData = response.data.data;
    const totalHousesCount = response.data.links.objectsCount;

    dispatch(getCompanyData({resData, totalHousesCount}));
}
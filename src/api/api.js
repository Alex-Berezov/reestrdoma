import axios from 'axios';
import { setAuthData } from '../redux/actions/auth';
import { getCompaniesList } from '../redux/actions/getCompaniesList';

const apiUrl = 'http://test-alpha.reestrdoma.ru/api/';
export let accessToken = "";

const authRequest = axios.create({
    baseURL: apiUrl
});

const requestWithToken = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});

export const authAPI = {
    login(username, password) {
        return authRequest.post(`login/`, { username, password });
    }
};
export const login = ({username, password}) => async (dispatch) => {
    const response = await authAPI.login(username, password);

    accessToken = response.data.data.token.access;
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

    console.log('API/response', response);
};
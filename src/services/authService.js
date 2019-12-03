import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndpoint = '/auth/login';
const tokenKey = 'token';
const userImg = 'userImg';
const userName = 'userName';

export const login = async (email, password) => {
    const { data } = await http.post(apiEndpoint, {
        email,
        password
    });
    localStorage.setItem(tokenKey, data.token.accessToken);
    localStorage.setItem(userName, data.user.name);
    localStorage.setItem(userImg, data.user.picture);
};

export const isUserLoggedIn = () => {
    const jwt = localStorage.getItem(tokenKey);

    // if jwt is null stop => anonymous user
    if (!jwt) return null;

    return jwtDecode(jwt);
};

export const getJwt = () => localStorage.getItem(tokenKey);

export const getHeaders = () => ({
    headers: {
        Authorization: `bearer ${getJwt()}`
    }
});

export const getUserImg = () => localStorage.getItem(userImg);

export const getUserName = () => localStorage.getItem(userName);

export default {
    login,
    isUserLoggedIn,
    getJwt,
    getHeaders,
    getUserImg,
    getUserName
};

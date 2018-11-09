import http from '../services/httpService';
import jwtDecode from 'jwt-decode';

const apiEndpoint = '/auth/login';
const tokenKey = 'token';

console.log(process.env.REACT_APP_API_URL);

export async function login(email, password) {
    const { data } = await http.post(apiEndpoint, {
        email: email,
        password: password
    });
    console.log(data);
    localStorage.setItem(tokenKey, data.token.accessToken);
}

export function getCurrentUser() {
    const jwt = localStorage.getItem(tokenKey);

    // if jwt is null stop => anonymous user
    if (!jwt) return null;

    return jwtDecode(jwt);	
}

export default {
    login,
    getCurrentUser
}
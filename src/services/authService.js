import http from '../services/httpService'
import jwtDecode from 'jwt-decode'

const apiEndpoint = '/auth/login'
const tokenKey = 'token'
const userImg = 'userImg'
const userName = 'userName'

export async function login(email, password) {
    const { data } = await http.post(apiEndpoint, {
        email: email,
        password: password
    })
    localStorage.setItem(tokenKey, data.token.accessToken)
    localStorage.setItem(userName, data.user.name)
    localStorage.setItem(userImg, data.user.picture)
}

export function isUserLoggedIn() {
    const jwt = localStorage.getItem(tokenKey)

    // if jwt is null stop => anonymous user
    if (!jwt) return null

    return jwtDecode(jwt)
}

export function getJwt() {
    return localStorage.getItem(tokenKey)
}

export function getHeaders() {
    return {
        headers: {
            'Authorization': `bearer ${getJwt()}`
        }
    }
}

export function getUserImg() {
    return localStorage.getItem(userImg)
}

export function getUserName() {
    return localStorage.getItem(userName)
}

export default {
    login,
    isUserLoggedIn,
    getJwt,
    getHeaders,
    getUserImg,
    getUserName
}
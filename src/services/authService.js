import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "auth/login";
const tokenKey = "token";
const userImg = "userImg";
const userName = "userName";

const login = async (email, password) => {
  const { data } = await http.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, data.token.accessToken);
  localStorage.setItem(userName, data.user.name);
  localStorage.setItem(userImg, data.user.picture);
};

const isUserLoggedIn = () => {
  const jwt = localStorage.getItem(tokenKey);

  // if jwt is null stop => anonymous user
  if (!jwt) return null;

  return jwtDecode(jwt);
};

const getJwt = () => localStorage.getItem(tokenKey);

const getHeaders = () => ({
  headers: {
    Authorization: `bearer ${getJwt()}`,
  },
});

const getUserImg = () => localStorage.getItem(userImg);

const getUserName = () => localStorage.getItem(userName);

export { login, isUserLoggedIn, getJwt, getHeaders, getUserImg, getUserName };

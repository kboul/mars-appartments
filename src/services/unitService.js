import http from './httpService';
import { getHeaders } from './authService';

const apiEndpoint = '/units';

export const getUnit = id => http.get(`${apiEndpoint}/${id}`, getHeaders());

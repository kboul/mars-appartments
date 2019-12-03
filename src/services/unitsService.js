import http from './httpService';
import { getHeaders } from './authService';

const apiEndpoint = '/units';

export const getUnits = () => http.get(apiEndpoint, getHeaders());

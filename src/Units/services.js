import http from '../services/httpService';
import { getHeaders } from '../services/authService';

const apiEndpoint = '/units';

export const getUnits = () => http.get(apiEndpoint, getHeaders());

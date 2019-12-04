import http from '../../services/httpService';
import { getHeaders } from '../../services/authService';

const apiEndpoint = '/units';

/**
 *
 * @param {string} id
 */

export const getUnit = id => http.get(`${apiEndpoint}/${id}`, getHeaders());

import http from '../services/httpService'
import { getHeaders } from "./authService"

const apiEndpoint = '/units'

export function getUnit(id) {
    return http.get(`${apiEndpoint}/${id}`, getHeaders())
}
import http from '../services/httpService'
import { getHeaders } from "./authService"

const apiEndpoint = '/units'

export function getUnits() {
    return http.get(apiEndpoint, getHeaders())
}
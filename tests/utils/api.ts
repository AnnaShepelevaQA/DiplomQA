import request from 'superagent';
import dotenv from 'dotenv'
dotenv.config()

const BASE_API_URL = process.env.BASE_API_URL || '';

export const api = {
    get: (url: string) => request.get(`${BASE_API_URL}${url}`),
    post: (url: string) => request.post(`${BASE_API_URL}${url}`),
    put: (url: string) => request.put(`${BASE_API_URL}${url}`),
    patch: (url: string) => request.patch(`${BASE_API_URL}${url}`),
    delete: (url: string) => request.delete(`${BASE_API_URL}${url}`),
}
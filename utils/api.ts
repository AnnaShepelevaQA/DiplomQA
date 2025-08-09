import request from 'superagent';
import dotenv from 'dotenv'
dotenv.config()

export const api = request(process.env.BASE_API_URL || 'https://jsonplaceholder.typicode.com/');
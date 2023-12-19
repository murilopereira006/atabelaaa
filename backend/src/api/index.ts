import axios from 'axios';
import * as dotenv from 'dotenv';

const baseUrl = process.env.URL_BASE_API_FUTEBOL || ''
const token = process.env.LIVE_API_TOKEN || ''

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {'Authorization': token}
})

const response = await instance.get(`campeonatos`)
console.log(response.data)
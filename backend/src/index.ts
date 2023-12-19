import { Elysia } from "elysia";
import axios from 'axios';
import * as dotenv from 'dotenv';

const PORT =  process.env.PORT || '';
const baseUrl = process.env.URL_BASE_API_FUTEBOL || '';
const token = process.env.LIVE_API_TOKEN || '';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {'Authorization': token}
})

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

const response = await instance.get(`campeonatos`);
console.log(response.data);

import { Elysia } from "elysia";
import * as dotenv from 'dotenv';
import fetchData from './helpers/scraping'

const PORT =  process.env.PORT || ''

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
const promise = await fetchData()
console.log(promise);

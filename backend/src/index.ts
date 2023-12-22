import { Elysia } from "elysia";
import * as dotenv from 'dotenv';

import mixingTable from "./helpers/mixingTables"

import fetchData from './helpers/scraping'
import data from './api'

const PORT =  process.env.PORT || ''

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
// console.log(data)
const aaaaaa = await fetchData()
// console.log(aaaaaa)

console.log(mixingTable(data, aaaaaa))
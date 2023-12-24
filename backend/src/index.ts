import { Elysia } from "elysia";
import * as dotenv from 'dotenv';

import mixingTable from "./helpers/mixingTables"

import fetchData from './helpers/scraping'
import data from './api'

const PORT =  process.env.PORT || ''

const probabilites = await fetchData()
const responseGetSimple = mixingTable(data, probabilites)

const app = new Elysia().get("/", () => responseGetSimple).listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

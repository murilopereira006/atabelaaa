import axios from 'axios';
import * as cheerio from 'cheerio';
import * as dotenv from 'dotenv';

dotenv.config();

const url = process.env.URL_REBAIXAMENTO_SERIE_A || '';

export default async function fetchData() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const tableCells = $('td');

    const cellContent: string[] = [];
    tableCells.each((index, element) => {
      const content = $(element).text().trim();
      if (content) {
        cellContent.push(content);
      }
    });

    return cellContent;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    return [];
  }
}

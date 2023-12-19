import axios from 'axios';
import * as cheerio from 'cheerio';
import * as dotenv from 'dotenv';

const url = process.env.URL_REBAIXAMENTO_SERIE_A || ''

export default async function fetchData() {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const tableRows = $('tr');
    
        // Criar um array para armazenar os dados extraídos
        const rowData: string[] = [];
        tableRows.each((index, element) => {
          rowData.push($.html(element));
        });

        return rowData;
    } catch (error) {
        console.error('Erro na solicitação:', error);
        return [];
    }
}

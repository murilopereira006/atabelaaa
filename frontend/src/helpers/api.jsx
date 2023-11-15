import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    timeout: 5000,
    // headers: { 'Authorization': import.meta.env.VITE_TEST_API_TOKEN }
    headers: { 'Authorization': import.meta.env.VITE_LIVE_API_TOKEN }
});

export async function getAllCamps() {
    try {
        const response = await instance.get(`campeonatos`)
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTableCamp(camp_id) {
    try {
        const response = await instance.get(`campeonatos/${camp_id}/tabela`)
        return response;
    } catch (error) {
        console.error(error);
    }
}

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    timeout: 1000,
    headers: { 'Authorization': import.meta.env.VITE_TEST_API_TOKEN }
    // headers: { 'Authorization': process.env.LIVE_API_TOKEN }
});

export async function getBrasileiraoATable() {
    try {
        const response = await instance.get('campeonatos')
        return response;
    } catch (error) {
        console.error(error);
    }
}

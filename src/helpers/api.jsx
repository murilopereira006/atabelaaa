import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer test_abfb828c31c0f7466840aa36c3d41e' }
    // headers: { 'Authorization': 'Bearer live_b94f2b2aab20044d2601c4036b797a' }
});

export async function getBrasileiraoATable() {
    try {
        const response = await instance.get('campeonatos')
        return response;
    } catch (error) {
        console.error(error);
    }
}

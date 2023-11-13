import axios from 'axios';

export async function getBrasileiraoATable() {
    try {
        const response = await axios.get('https://api.api-futebol.com.br/v1/campeonatos', {
            headers: {
                'Authorization': 'Bearer test_abfb828c31c0f7466840aa36c3d41e'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

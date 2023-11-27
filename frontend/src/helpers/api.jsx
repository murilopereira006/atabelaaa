import axios from 'axios'
import camp from './idCampList'

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    timeout: 5000,
    headers: { 'Authorization': import.meta.env.VITE_TEST_API_TOKEN }
    // headers: { 'Authorization': import.meta.env.VITE_LIVE_API_TOKEN }
});

export async function getAllCamps() {
    let currData = localStorage.getItem('campeonatos')
    let oldDate = Date(currData.date)
    let newDate = new Date()

    // if() {
    try {
        const response = await instance.get(`campeonatos`)
        localStorage.setItem('campeonatos', response)
        return response
    } catch (error) {
        console.error(error);
    }
    // } else {

    // }
}

export async function getTableCamp(camp_name, camp_id) {
    let newDate = new Date()
    let currData = localStorage.getItem(`campeonato ${camp_name}`)
    let oldDate = Date(currData.date)

    let oldYear = oldDate.substring(11, 15)
    let oldMonth = oldDate.substring(4, 7)
    let oldDay = oldDate.substring(8, 10)

    console.log(oldYear)
    console.log(oldMonth)
    console.log(oldDay)

    if (newDate.getFullYear !== oldYear && newDate.getMonth !== oldMonth && newDate.getDay !== oldDay) {
        try {
            const response = await instance.get(`campeonatos/${camp_id}/tabela`)
            localStorage.setItem(`campeonato ${camp_name}`, JSON.stringify({ 'date': new Date(), ...response }))
            return response
        } catch (error) {
            console.error(error);
        }
    } else {
        return currData
    }
}

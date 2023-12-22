interface TimeInfo {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
}
  
interface TabelaPosicoes {
    posicao: number;
    pontos: number;
    time: TimeInfo;
    probability: string
}

interface Probability {
    [key: string]: string;
  }

const mixingTable = (table: Array<TabelaPosicoes>, valuesToIncrement: Array<Probability>): object => {
    let newTable: Array<TabelaPosicoes> = [];
    
    table.map(e => {
        let nomeTime = e.time.nome_popular;
        for (let i = 0; i < valuesToIncrement.length; i++) {
            if (nomeTime.toUpperCase() === Object.keys(valuesToIncrement[i])[0]) {
                newTable.push({...e, probability: Object.values(valuesToIncrement[i])[0]});
            }
        }
    })

    return newTable
}

export default mixingTable

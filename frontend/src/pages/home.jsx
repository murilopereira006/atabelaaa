// import { getAllCamps, getTableCamp } from '../helpers/api'
// import camp from '../helpers/idCampList'
import Tabela from '../components/tabela'

import mock from '../helpers/dataMock'

// const tabela = await getTableCamp('brasileirao', camp.brasileirao)

const tableHeaders = [{ id: 0, acronym: 'POS', longWord: 'Posicao', colspan: '1' }, { id: 1, acronym: 'Time', longWord: 'Nome popular do time', colspan: '2' }, { id: 2, acronym: 'PTS', longWord: 'Pontos', colspan: '1' }, { id: 3, acronym: 'J', longWord: 'Jogos', colspan: '1' }, { id: 4, acronym: 'V', longWord: 'Vitorias', colspan: '1' }, { id: 5, acronym: 'E', longWord: 'Empates', colspan: '1' }, { id: 6, acronym: 'D', longWord: 'Derrotas', colspan: '1' }, { id: 7, acronym: 'GP', longWord: 'Gols Pro', colspan: '1' }, { id: 8, acronym: 'GS', longWord: 'Gols Sofridos', colspan: '1' }, { id: 9, acronym: 'SG', longWord: 'Saldo de Gols', colspan: '1' }, { id: 10, acronym: 'Apv', longWord: 'Aproveitamento', colspan: '1' }, { id: 11, acronym: '🏆 ou 🕳️', longWord: 'Porcentagem de 🏆 ou 🕳️', colspan: '1' }]

const Home = () => {
    return <>
        <Tabela data={mock.data} tableHeaders={tableHeaders} />
    </>;
};

export default Home;
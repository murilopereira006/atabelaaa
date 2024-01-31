// import { getAllCamps, getTableCamp } from '../helpers/api'
// import camp from '../helpers/idCampList'
import Tabela from '../components/tabela'

import mock from '../helpers/dataMock'

// const tabela = await getTableCamp('brasileirao', camp.brasileirao)

const tableHeaders = [{ acronym: 'POS', longWord: 'Posicao', colspan: '1' }, { acronym: 'Time', longWord: 'Time', colspan: '2' }, { acronym: 'PTS', longWord: 'Pontos', colspan: '1' }, { acronym: 'J', longWord: 'Jogos', colspan: '1' }, { acronym: 'V', longWord: 'Vitorias', colspan: '1' }, { acronym: 'E', longWord: 'Empates', colspan: '1' }, { acronym: 'D', longWord: 'Derrotas', colspan: '1' }, { acronym: 'GP', longWord: 'Gols Pro', colspan: '1' }, { acronym: 'GS', longWord: 'Gols Sofridos', colspan: '1' }, { acronym: 'SG', longWord: 'Saldo de Gols', colspan: '1' }, { acronym: 'Apv', longWord: 'Aproveitamento', colspan: '1' }, { acronym: '🏆 ou 🕳️', longWord: 'Porcentagem de 🏆 ou 🕳️', colspan: '1' }]

const Home = () => {
    return <>
        <Tabela data={mock.data} tableHeaders={tableHeaders} />
    </>;
};

export default Home;
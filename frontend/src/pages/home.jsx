import { getAllCamps, getTableCamp } from '../helpers/api'
import camp from '../helpers/idCampList'
import Tabela from '../components/tabela'

const tabela = await getTableCamp('brasileirao', camp.brasileirao)

const Home = () => {
    return <>
        <Tabela data={tabela.data} />
    </>;
};

export default Home;
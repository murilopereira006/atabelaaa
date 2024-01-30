// import { getAllCamps, getTableCamp } from '../helpers/api'
// import camp from '../helpers/idCampList'
import Tabela from '../components/tabela'

import mock from '../helpers/dataMock'

// const tabela = await getTableCamp('brasileirao', camp.brasileirao)

const Home = () => {
    return <>
        <Tabela data={mock.data} />
    </>;
};

export default Home;
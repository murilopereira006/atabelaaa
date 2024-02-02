// import { getAllCamps, getTableCamp } from '../helpers/api'
// import camp from '../helpers/idCampList'
import Topbar from '../components/topBar'
import Tabela from '../components/tabela'

import { tableHeaders, mock } from '../helpers/dataMock'

// const tabela = await getTableCamp('brasileirao', camp.brasileirao)

const Home = () => {
    return <>
        <Topbar />
        <Tabela data={mock.data} tableHeaders={tableHeaders} />
    </>;
};

export default Home;
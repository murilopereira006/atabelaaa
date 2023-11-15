import { getAllCamps, getTableCamp } from '../helpers/api'
import camp from '../helpers/idCampList'

import Tabela from '../components/tabela'

// const response = await getAllCamps()
// // console.log(response)

const tabela = await getTableCamp(camp.brasileirao)
// console.log(response2)

const Home = () => {
    return <>
        <Tabela data={tabela.data} />
    </>;
};

export default Home;
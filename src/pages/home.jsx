import { getBrasileiraoATable } from '../helpers/api'

const response = await getBrasileiraoATable()
console.log(response)

const Home = () => {
    return <h1>{response.data[0].nome_popular}</h1>;
};

export default Home;
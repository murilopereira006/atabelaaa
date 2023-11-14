import PropTypes from 'prop-types'

export default function Tabela({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>POS</th>
                    <th>Time</th>
                    <th>PTS</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>aproveitamento</th>
                    <th>🏆 ou 🕳️</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => {
                        return (<tr key={item.time.nome_popular}>
                            <td>{item.posicao}</td>
                            <td>
                                <img style={{ height: '20px' }} src={item.time.escudo} />
                                {item.time.nome_popular}
                            </td>
                            <td>{item.pontos}</td>
                            <td>{item.jogos}</td>
                            <td>{item.vitorias}</td>
                            <td>{item.empates}</td>
                            <td>{item.derrotas}</td>
                            <td>{item.gols_pro}</td>
                            <td>{item.gols_contra}</td>
                            <td>{item.saldo_gols}</td>
                            <td>{item.aproveitamento}</td>
                            <td>20%</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    )
}

Tabela.propTypes = {
    data: PropTypes.array.isRequired,
}

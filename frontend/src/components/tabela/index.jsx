import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, CellHeader, CellBody } from './styles'

export default function Tabela({ data }) {
    return (
        <Table>
            <TableHeader>
                <tr>
                    <CellHeader>POS</CellHeader>
                    <CellHeader>Time</CellHeader>
                    <CellHeader>PTS</CellHeader>
                    <CellHeader>J</CellHeader>
                    <CellHeader>V</CellHeader>
                    <CellHeader>E</CellHeader>
                    <CellHeader>D</CellHeader>
                    <CellHeader>GP</CellHeader>
                    <CellHeader>GC</CellHeader>
                    <CellHeader>SG</CellHeader>
                    <CellHeader>aproveitamento</CellHeader>
                    <CellHeader>🏆 ou 🕳️</CellHeader>
                </tr>
            </TableHeader>
            <TableBody>
                {
                    data.map((item) => {
                        return (<tr key={item.time.nome_popular}>
                            <CellBody>{item.posicao}</CellBody>
                            <CellBody>
                                <img style={{ height: '20px' }} src={item.time.escudo} alt={`escudo ${item.time.nome_popular}`} />
                                {item.time.nome_popular}
                            </CellBody>
                            <CellBody>{item.pontos}</CellBody>
                            <CellBody>{item.jogos}</CellBody>
                            <CellBody>{item.vitorias}</CellBody>
                            <CellBody>{item.empates}</CellBody>
                            <CellBody>{item.derrotas}</CellBody>
                            <CellBody>{item.gols_pro}</CellBody>
                            <CellBody>{item.gols_contra}</CellBody>
                            <CellBody>{item.saldo_gols}</CellBody>
                            <CellBody>{item.aproveitamento}</CellBody>
                            <CellBody>20%</CellBody>
                        </tr>)
                    })
                }
            </TableBody>
        </Table>
    )
}

Tabela.propTypes = {
    data: PropTypes.array.isRequired,
}

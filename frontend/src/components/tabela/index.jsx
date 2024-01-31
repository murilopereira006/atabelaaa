import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, CellHeader, CellBody } from './styles'

export default function Tabela({ tableHeaders, data }) {
    return (
        <Table>
            <TableHeader>
                <tr>
                    {tableHeaders.map((item, index) => {
                        return (
                            <CellHeader key={index} colSpan={item.colspan}>
                                {item.acronym}
                            </CellHeader>
                        )
                    })}
                </tr>
            </TableHeader>
            <TableBody>
                {
                    data.map((item) => {
                        return (
                            <tr key={item.time.nome_popular}>
                                <CellBody>{item.posicao}</CellBody>
                                <CellBody>
                                    <img style={{ height: '20px' }} src={item.time.escudo} alt={`escudo ${item.time.nome_popular}`} />
                                </CellBody>
                                <CellBody>{item.time.nome_popular}</CellBody>
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
                            </tr>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

Tabela.propTypes = {
    data: PropTypes.array.isRequired,
    tableHeaders: PropTypes.array.isRequired,
}

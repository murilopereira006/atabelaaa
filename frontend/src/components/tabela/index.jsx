import PropTypes from 'prop-types'
import { Table, TableHeader, TableBody, TableLineHeader, TableLine, CellHeader, CellBody, TooltipStyled, ImgTeam } from './styles'

const classificationColor = (posicao) => {
    if (posicao <= 4) {
        return "green"
    } else if (posicao <= 6) {
        return "purple"
    } else if (posicao <= 12) {
        return "blue"
    } else if (posicao >= 17) {
        return "red"
    } else {
        return "gray"
    }
}

export default function Tabela({ tableHeaders, data }) {
    return (
        <Table>
            <TableHeader>
                <TableLineHeader>
                    {tableHeaders.map((item, index) => {
                        return (
                            <CellHeader id={"cellId" + item.id} key={index} colSpan={item.colspan}>
                                <TooltipStyled anchorSelect={"#cellId" + item.id} key={`TooltipStyled ${index}`} place="top">
                                    {item.longWord}
                                </TooltipStyled>
                                {item.acronym}
                            </CellHeader>
                        )
                    })}
                </TableLineHeader>
            </TableHeader>
            <TableBody>
                {
                    data.map((item) => {
                        return (
                            <TableLine key={item.time.nome_popular} colorline={classificationColor(item.posicao)}>
                                <CellBody>{item.posicao}</CellBody>
                                <CellBody>
                                    <ImgTeam src={item.time.escudo} alt={`escudo ${item.time.nome_popular}`} />
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
                            </TableLine>
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

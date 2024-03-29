import styled from 'styled-components'
import { Tooltip } from 'react-tooltip'

export const Table = styled.table`
    border-spacing: 0px;
    border-collapse: collapse;
    
    tr:nth-child(even) {
        background-color: var(--tertiary-color);
    }
`;

export const TableLineHeader = styled.tr`
    box-sizing: border-box;
`;

export const TableLine = styled.tr`
    border-left: 2px solid ${props => props.colorline};
    border-bottom: 1px solid ${props => props.colorline};
    box-sizing: border-box;

    :hover {
        padding: 15px 0;    
    }

    td:nth-child(n+2) {
        color: ${props => props.colorline};
    }
`;

export const TableHeader = styled.thead`
    tr {
        background-color: var(--complementary-color);
        border-left: 2px solid var(--complementary-color);
        border-bottom: 2px solid var(--complementary-color);
    }
`;

export const TableBody = styled.tbody`
    // height: 80vh;
`;

export const CellHeader = styled.th`
    padding: 5px 10px;
`;

export const CellBody = styled.td`
    padding: 5px 10px;
    text-align: center;
`;

export const TooltipStyled = styled(Tooltip)`
    position: absolute;
`;

export const ImgTeam = styled.img`
    max-height: 20px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;


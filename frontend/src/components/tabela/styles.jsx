import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 0px;

    tr: {
    }

    tr:nth-child(even) {
        background-color: #D6EEEE;
    }

    tr:hover { background-color: red; }
`;

export const TableHeader = styled.thead`
    background-color: #F2F2F2;
    tr:hover { background-color: transparent; }
`;

export const TableBody = styled.tbody`
    // height: 80vh;
`;

export const CellHeader = styled.th`
    
`;

export const CellBody = styled.td`
    padding: 5px 10px;
    text-align: center;
`;

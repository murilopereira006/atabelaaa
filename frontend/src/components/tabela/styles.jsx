import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 10px;

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

// export const HeadrBox = styled.div`
//     width: 90%;
//     padding: 0 20px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
// `;

// export const TitleStyle = styled.h1`
//     font-family: Poppins;
//     font-size: 2.2vh;
//     font-weight: bold;
//     text-align: left;
//     letter-spacing: 0px;
//     color: #272727;
// `;

// export const ChangeMonth = styled.div`
//     font: normal normal normal 1.6vh/15px Prompt;
//     letter-spacing: 0px;
//     color: #707070;
// `;
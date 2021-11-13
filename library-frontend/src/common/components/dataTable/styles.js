import styled from 'styled-components';

export const StyledTableCell = styled.td`
    border: 1px dotted black;
`;

export const StyledTableHeader = styled(StyledTableCell)`
    font-weight: 700;
    color: ${(props) => (props.type === 'primary' ? 'red' : 'blue')};
`;

export const StyledTable = styled.table`
    border: 1px solid black;
`;

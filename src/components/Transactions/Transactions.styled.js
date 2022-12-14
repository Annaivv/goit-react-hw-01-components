import styled, { css } from 'styled-components';

export const TransactionsTable = styled.table`
  margin: 0 auto;
  padding: 0;
  width: 800px;
  border: 2px solid #f1eded;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: #75e7dc;
`;
export const HeadItems = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ItemRow = styled.tr`
  :nth-child(even) {
    background-color: #e8ebeb;
  }
`;

export const ItemCell = styled.td`
  padding-top: 5px;
  padding-bottom: 5px;
  width: 33%;
  text-align: center;

  ${props =>
    props.type &&
    css`
      padding-left: 100px;
      text-align: left;
      text-transform: capitalize;
    `};
`;

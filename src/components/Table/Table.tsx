import type { Key, ReactNode } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;

  table-layout: fixed;
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 12px 15px;
    overflow: auto;
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRowEven};
  }

  tr:hover td {
    background-color: #f0f8ff;
    cursor: pointer;
  }

  th {
    background-color: ${({ theme }) => theme.colors.tableHeader};
    color: white;
  }

`;

export type TableProps<Item> = {
  items: Item[];
  headers: string[];
  getHeader: (header: string) => ReactNode;
  getRow: (item: Item) => ReactNode;
  getKey: (item: Item) => Key;
};

const Table = <Item extends Record<string, unknown>>({
  items,
  getKey,
  getHeader,
  getRow,
  headers,
}: TableProps<Item>) => (
  <StyledTable>
    <thead>
      <tr>{headers.map((header) => getHeader(header))}</tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={getKey(item)}>{getRow(item)}</tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;

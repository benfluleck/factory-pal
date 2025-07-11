import type { Key, ReactNode } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ theme }) => theme.space.sm} 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
  table-layout: fixed;
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    overflow: auto;
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRowEven};
  }

  tr:hover td {
    background-color: ${({ theme }) => theme.colors.tableHover};
    cursor: pointer;
  }

  th {
    background-color: ${({ theme }) => theme.colors.tableHeader};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const TableCaption = styled.caption`
  caption-side: bottom;
  padding: ${({ theme }) => theme.space.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const TableRow = styled.tr<{ $isSelected?: boolean }>`

td {
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.tableRowSelected : "transparent"};
    
`;

export type TableProps<Item> = {
  items: Item[];
  headers: string[];
  title: string;
  getHeader: (header: string) => ReactNode;
  getRow: (item: Item) => ReactNode;
  getKey: (item: Item) => Key;
  selectedId?: string | null;
  onClick?: (event: React.MouseEvent<HTMLTableElement>) => void;
};

const Table = <Item extends Record<string, unknown>>({
  items,
  getKey,
  getHeader,
  getRow,
  headers,
  title,
  selectedId,
  onClick,
}: TableProps<Item>) => {
  console.log("Table rendered with items:", selectedId);
  return (
    <StyledTable data-testid="table" onClick={onClick}>
      <TableCaption>{title}</TableCaption>
      <thead>
        <tr>{headers.map((header) => getHeader(header))}</tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableRow
            data-id={getKey(item)}
            $isSelected={selectedId === getKey(item)}
            key={getKey(item)}
          >
            {getRow(item)}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

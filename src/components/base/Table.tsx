import { Box, Table as TableChakra, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

export interface ITableProps<Data extends object> {
  data: Data[];
  columns: ColumnDef<Data, any>[];
  onLoadMore?: () => void;
}

export default function Table<Data extends object>({
  columns,
  data,
  onLoadMore,
}: ITableProps<Data>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box
      m={{
        base: "24px auto",
        md: "20px auto",
      }}
      maxW="558px"
    >
      <TableChakra size="sm">
        <Thead top={0} zIndex="docked">
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta: any = header.column.columnDef.meta;
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                    border={"none"}
                    color={"white"}
                    fontSize={{
                      base: 14,
                      md: 18,
                    }}
                    fontWeight={700}
                    fontFamily={"Quantico"}
                    textTransform="none"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <Tr
              key={row.id}
              // ref={rowIndex === data.length - 1 ? rootRef : null}
            >
              {row.getVisibleCells().map((cell) => {
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}
                    border={"none"}
                    color={"white"}
                    fontSize={{
                      base: "18px",
                      md: "18px",
                    }}
                    pt="4px"
                    pb="4px"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </TableChakra>
    </Box>
  );
}

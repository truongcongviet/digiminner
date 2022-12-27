import { Box, Link, Text } from "@chakra-ui/react";
import Table from "@/src/components/base/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

interface ITableOreExchangeItem {}

export interface IHistoryTableProps {
  onResend?: (item: ITableOreExchangeItem) => void;
  onViewTransaction?: () => void;
  data: ITableOreExchangeItem[];
  onLoadMore?: () => void;
}

const columnHelper = createColumnHelper<ITableOreExchangeItem>();

const TableOreExchange = ({
  onResend,
  onViewTransaction,
  data = [],
  onLoadMore,
}: IHistoryTableProps) => {
  const columns = useMemo(() => {
    return [
      columnHelper.accessor("type", {
        header: "Ore Type",
        cell: (info) => {
          return info.getValue();
        },
      }),
      columnHelper.accessor("reward", {
        header: "$ Reward",
        cell: (info) => {
          return info.getValue();
        },
      }),
      columnHelper.accessor("winner", {
        header: "Weekly winners",
        cell: (info) => {
          return info.getValue();
        },
      }),
    ];
  }, []);
  return <Table columns={columns} data={data} />;
};

export default TableOreExchange;

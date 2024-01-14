import React from 'react';
import DataTable from 'react-data-table-component';

interface TableProps {
  columns: any[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      striped
    />
  );
};

export default Table;

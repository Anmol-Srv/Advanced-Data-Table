// import React, { useMemo } from 'react';
// import {MaterialReactTable} from 'material-react-table';
// import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
// import sampleData from '../sampleData';

// const DataTable = () => {
//     const columns = useMemo(() => [
//         {
//           accessorKey: 'id',
//           header: 'ID',
//         },
//         {
//           accessorKey: 'name',
//           header: 'Name',
//         },
//         {
//           accessorKey: 'category',
//           header: 'Category',
//         },
//         {
//           accessorKey: 'subcategory',
//           header: 'Subcategory',
//         },
//         {
//           accessorKey: 'createdAt',
//           header: 'Created At',
//           cell: info => new Date(info.getValue()).toLocaleString()
//         },
//         {
//           accessorKey: 'updatedAt',
//           header: 'Updated At',
//           cell: info => new Date(info.getValue()).toLocaleString()
//         },
//         {
//           accessorKey: 'price',
//           header: 'Price',
//         },
//         {
//           accessorKey: 'sale_price',
//           header: 'Sale Price',
//         },
//       ], []);

//   const table = useReactTable({
//     sampleData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <MaterialReactTable
//       columns={columns}
//       data={sampleData}
//       tableInstance={table}
//     />
//   );
// };

// export default DataTable;


// import React, { useMemo } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
// import sampleData from '../sampleData';

// const DataTable = () => {
//   const columns = useMemo(() => [
//     {
//       accessorKey: 'id',
//       header: 'ID',
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//     },
//     {
//       accessorKey: 'category',
//       header: 'Category',
//     },
//     {
//       accessorKey: 'subcategory',
//       header: 'Subcategory',
//     },
//     {
//       accessorKey: 'createdAt',
//       header: 'Created At',
//       cell: info => new Date(info.getValue()).toLocaleString()
//     },
//     {
//       accessorKey: 'updatedAt',
//       header: 'Updated At',
//       cell: info => new Date(info.getValue()).toLocaleString()
//     },
//     {
//       accessorKey: 'price',
//       header: 'Price',
//     },
//     {
//       accessorKey: 'sale_price',
//       header: 'Sale Price',
//     },
//   ], []);

//   const table = useReactTable({
//     data: sampleData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     initialState: {
//       pagination: {
//         pageSize: 10,
//       },
//     },
//   });

//   return (
//     <MaterialReactTable
//       columns={columns}
//       data={sampleData}
//       tableInstance={table}
//       enableSorting
//       enablePagination
//       manualPagination
//       rowCount={sampleData.length}
//       enableColumnVisibility
//       enableFilters
//     />
//   );
// };

// export default DataTable;

import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
import sampleData from '../sampleData';
import SidePanel from './SidePanel';
import Button from '@mui/material/Button';

const DataTable = () => {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState({});
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'subcategory',
      header: 'Subcategory',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: info => new Date(info.getValue()).toLocaleString()
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: info => new Date(info.getValue()).toLocaleString()
    },
    {
      accessorKey: 'price',
      header: 'Price',
    },
    {
      accessorKey: 'sale_price',
      header: 'Sale Price',
    },
  ], []);

  const table = useReactTable({
    data: sampleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: [sortBy],
      globalFilter: filters,
    },
  });

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Items</h2>
        <Button variant="contained" onClick={() => setIsPanelOpen(true)}>Filter & Sort</Button>
      </div>
      <MaterialReactTable
        columns={columns}
        data={sampleData}
        tableInstance={table}
        enableSorting
        enablePagination
        manualPagination
        rowCount={sampleData.length}
        enableColumnVisibility
        enableFilters
      />
      <SidePanel
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        columns={columns}
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default DataTable;


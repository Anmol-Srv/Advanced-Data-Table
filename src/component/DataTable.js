import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import sampleData from '../sampleData';
import Button from '@mui/material/Button';
import SidePanel from './SidePanel';

const DataTable = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [activeOption, setActiveOption] = useState('');
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const columns = useMemo(
    () => [
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
        cell: (info) => new Date(info.getValue()).toLocaleString(),
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        cell: (info) => new Date(info.getValue()).toLocaleString(),
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'sale_price',
        header: 'Sale Price',
      },
    ],
    []
  );

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Items</h2>
        <Button variant="contained" onClick={() => setIsPanelOpen(true)}>
          Side Panel
        </Button>
      </div>
      <MaterialReactTable
        data={sampleData}
        columns={columns}
        enableColumnOrdering={false}
        enableSorting={true}
        enablePagination={true}
        enableColumnVisibility={true}
        enableFilters={true}
        manualPagination={false}
        enableColumnActions={false}
        muiPaginationProps={{
          color: 'primary',
          shape: 'rounded',
          showRowsPerPage: false,
          variant: 'outlined',
        }}
        state={{
          globalFilter,
          sorting,
          columnVisibility,
        }}
        onGlobalFilterChange={setGlobalFilter}
        onSortingChange={setSorting}
        onColumnVisibilityChange={setColumnVisibility}
      />
      <SidePanel
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        columns={columns}
        setGlobalFilter={setGlobalFilter}
        setSorting={setSorting}
        toggleColumnVisibility={(columnId, isVisible) => setColumnVisibility(prev => ({
          ...prev,
          [columnId]: isVisible,
        }))}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
    </div>
  );
};

export default DataTable;

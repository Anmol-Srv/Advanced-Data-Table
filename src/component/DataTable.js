import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import sampleData from '../sampleData';
import Button from '@mui/material/Button';
import SidePanel from './SidePanel';
import moment from 'moment';

const DataTable = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [activeOption, setActiveOption] = useState('');
  const [sorting, setSorting] = useState([]);
  const [grouping, setGrouping] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [filteredData, setFilteredData] = useState(sampleData);
  const [initialGroup, setInitialGroup] = useState('');

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
        Cell: ({ row }) => moment(row.original.createdAt).format('DD-MMM-YYYY, HH:mm'),
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        Cell: ({ row }) => moment(row.original.createdAt).format('DD-MMM-YYYY, HH:mm'),
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

  useEffect(() => {
    const initialVisibility = {};
    columns.forEach(column => {
      initialVisibility[column.accessorKey] = true;
    });
    setColumnVisibility(initialVisibility);
  }, [columns]);

  const handleGroupApply = (group) => {
    setInitialGroup(group.length > 0 ? group[0] : '');
    setGrouping(group);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Items</h2>
        <Button variant="contained" onClick={() => setIsPanelOpen(true)} style={{ height: '40px' }}>
          Side Panel
        </Button>
      </div>
      <MaterialReactTable
        data={filteredData}
        columns={columns}
        enableColumnOrdering={false}
        enableCellActions={true}
        enableSorting={true}
        enableGrouping={true}
        enablePagination={true}
        enableColumnVisibility={true}
        enableFilters={true}
        manualPagination={false}
        enableColumnActions={false}
        muiPaginationProps={{
          color: 'primary',
          showRowsPerPage: false,
          variant: 'outlined',
        }}
        muiTableHeadCellProps={{
          align: 'center',
        }}
        muiTableBodyCellProps={{
          align: 'center',
        }}
        muiTableFooterCellProps={{
          align: 'center',
        }}
        paginationDisplayMode='pages'
        state={{
          globalFilter,
          sorting,
          columnVisibility,
          grouping
        }}
        onGlobalFilterChange={setGlobalFilter}
        onSortingChange={setSorting}
        onGroupingChange={handleGroupApply}
        onColumnVisibilityChange={setColumnVisibility}
      />
      <SidePanel
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        columns={columns}
        data={sampleData}
        setGlobalFilter={setGlobalFilter}
        setFilter={setFilteredData}
        setSorting={setSorting}
        setGrouping={setGrouping}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        columnVisibility={columnVisibility}
        setColumnVisibility={setColumnVisibility}
        initialGroup={initialGroup}
      />
    </div>
  );
};

export default DataTable;

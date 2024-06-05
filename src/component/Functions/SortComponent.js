import React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';

const SortComponent = ({ columns, setSorting, goBack }) => (
  <div>
    <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
      Go Back
    </Button>
    <List>
      {columns.map((column) => (
        <Button
          key={column.accessorKey}
          onClick={() => setSorting([{ id: column.accessorKey, desc: false }])}
          variant="outlined"
          color="primary"
          fullWidth
          style={{ margin: '8px 0' }}
        >
          <SortIcon style={{ marginRight: '8px' }} />
          {column.header}
        </Button>
      ))}
    </List>
    <Button
      variant="outlined"
      color="primary"
      onClick={() => setSorting([])}
      style={{ marginTop: 16 }}
    >
      Clear Sort
    </Button>
  </div>
);

export default SortComponent;

import React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

const GroupComponent = ({ columns, goBack }) => (
  <div>
    <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
      Go Back
    </Button>
    <List>
      {columns.map((column) => (
        <Button
          key={column.accessorKey}
          variant="outlined"
          color="primary"
          fullWidth
          style={{ margin: '8px 0' }}
        >
          {column.header}
        </Button>
      ))}
    </List>
  </div>
);

export default GroupComponent;

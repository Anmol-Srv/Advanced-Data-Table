import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ColumnVisibilityToggle = ({ columns, columnVisibility, setColumnVisibility, goBack }) => {
  const handleToggle = (columnId) => {
    setColumnVisibility(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const handleSelectAll = () => {
    const newVisibility = {};
    columns.forEach(column => {
      newVisibility[column.accessorKey] = true;
    });
    setColumnVisibility(newVisibility);
  };

  const handleDeselectAll = () => {
    const newVisibility = {};
    columns.forEach(column => {
      newVisibility[column.accessorKey] = false;
    });
    setColumnVisibility(newVisibility);
  };

  return (
    <div>
      <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
        Go Back
      </Button>
      <FormGroup>
        {columns.map(column => (
          <Box key={column.accessorKey} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1" >
              {column.header}
            </Typography>
            <Switch
              checked={!!columnVisibility[column.accessorKey]}
              onChange={() => handleToggle(column.accessorKey)}
            />
          </Box>
        ))}
      </FormGroup>
      <Button onClick={handleSelectAll} variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Select All
      </Button>
      <Button onClick={handleDeselectAll} variant="outlined" color="secondary" style={{ marginTop: '16px', marginLeft: '16px' }}>
        Deselect All
      </Button>
    </div>
  );
};

export default ColumnVisibilityToggle;

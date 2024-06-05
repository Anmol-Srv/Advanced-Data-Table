import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

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
          <FormControlLabel
            key={column.accessorKey}
            control={
              <Checkbox
                checked={!!columnVisibility[column.accessorKey]}
                onChange={() => handleToggle(column.accessorKey)}
              />
            }
            label={column.header}
          />
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

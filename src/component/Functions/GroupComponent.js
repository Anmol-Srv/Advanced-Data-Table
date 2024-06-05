// import React from 'react';
// import List from '@mui/material/List';
// import Button from '@mui/material/Button';

// const GroupComponent = ({ columns, goBack }) => (
//   <div>
//     <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
//       Go Back
//     </Button>
//     <List>
//       {columns.map((column) => (
//         <Button
//           key={column.accessorKey}
//           variant="outlined"
//           color="primary"
//           fullWidth
//           style={{ margin: '8px 0' }}
//         >
//           {column.header}
//         </Button>
//       ))}
//     </List>
//   </div>
// );

// export default GroupComponent;

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const GroupComponent = ({ columns, setGrouping, goBack }) => {
  const [selectedColumn, setSelectedColumn] = useState('');

  const handleGroupChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  const applyGrouping = () => {
    setGrouping(selectedColumn ? [selectedColumn] : []);
    goBack();
  };

  const clearGrouping = () => {
    setSelectedColumn('');
    setGrouping([]);
  };

  return (
    <div>
      <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
        Go Back
      </Button>
      <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
        <InputLabel id="group-by-label">Select a column to group by</InputLabel>
        <Select
          labelId="group-by-label"
          value={selectedColumn}
          onChange={handleGroupChange}
          label="Select a column to group by"
        >
          {columns.map((column) => (
            <MenuItem key={column.accessorKey} value={column.accessorKey}>
              {column.header}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={applyGrouping}
        style={{ marginTop: 16 }}
        disabled={!selectedColumn}
      >
        Apply Grouping
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={clearGrouping}
        style={{ marginTop: 16 }}
      >
        Clear Grouping
      </Button>
    </div>
  );
};

export default GroupComponent;

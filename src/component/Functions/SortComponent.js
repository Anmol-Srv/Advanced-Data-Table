// import React from 'react';
// import List from '@mui/material/List';
// import Button from '@mui/material/Button';
// import SortIcon from '@mui/icons-material/Sort';

// const SortComponent = ({ columns, setSorting, goBack }) => (
//   <div>
//     <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
//       Go Back
//     </Button>
//     <List>
//       {columns.map((column) => (
//         <Button
//           key={column.accessorKey}
//           onClick={() => setSorting([{ id: column.accessorKey, desc: false }])}
//           variant="outlined"
//           color="primary"
//           fullWidth
//           style={{ margin: '8px 0' }}
//         >
//           <SortIcon style={{ marginRight: '8px' }} />
//           {column.header}
//         </Button>
//       ))}
//     </List>
//     <Button
//       variant="outlined"
//       color="primary"
//       onClick={() => setSorting([])}
//       style={{ marginTop: 16 }}
//     >
//       Clear Sort
//     </Button>
//   </div>
// );

// export default SortComponent;


import React, { useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ListItem, ListItemText } from '@mui/material';

const SortComponent = ({ columns, setSorting, goBack }) => {
  const [sortState, setSortState] = useState({});

  const handleSortChange = (columnId) => {
    let newSortState = { ...sortState };
    if (!newSortState[columnId]) {
      newSortState[columnId] = 'asc';
      setSorting([{ id: columnId, desc: false }]);
    } else if (newSortState[columnId] === 'asc') {
      newSortState[columnId] = 'desc';
      setSorting([{ id: columnId, desc: true }]);
    } else {
      delete newSortState[columnId];
      setSorting([]);
    }
    setSortState(newSortState);
  };

  const clearSort = () => {
    setSortState({});
    setSorting([]);
  };

  return (
    <div>
      <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
        Go Back
      </Button>
      <List>
        {columns.map((column) => (
          <ListItem button key={column.accessorKey} onClick={() => handleSortChange(column.accessorKey)}>
            <ListItemText primary={column.header} />
            {sortState[column.accessorKey] === 'asc' && <ArrowUpwardIcon />}
            {sortState[column.accessorKey] === 'desc' && <ArrowDownwardIcon />}
            {!sortState[column.accessorKey] && <SortIcon />}
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        color="primary"
        onClick={clearSort}
        style={{ marginTop: 16 }}
      >
        Clear Sort
      </Button>
    </div>
  );
};

export default SortComponent;

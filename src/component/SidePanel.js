import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';

const SidePanel = ({ open, onClose, columns, setSortBy }) => {
//   const handleFilterChange = (columnId, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [columnId]: value,
//     }));
//   };

  const handleSortChange = (columnId) => {
    setSortBy(prev => ({
      id: columnId,
      desc: prev.id === columnId ? !prev.desc : false,
    }));
  };

  const clearSort = () => {
    setSortBy({});
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 250, padding: 16 }}>
        <h3>Sorting Options</h3>
        <List>
          {columns.map(column => (
            <React.Fragment key={column.accessorKey}>
              <ListItem>
                <ListItemText primary={column.header} />
                <IconButton onClick={() => handleSortChange(column.accessorKey)}>
                  <SortIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Button variant="outlined" onClick={clearSort} style={{ marginTop: 16 }}>
          Clear Sort
        </Button>
      </div>
    </Drawer>
  );
};

export default SidePanel;

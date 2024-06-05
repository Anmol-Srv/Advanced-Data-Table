import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchComponent = ({ setGlobalFilter, goBack }) => (
  <div>
    <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
      Go Back
    </Button>
    <TextField
      placeholder="Search..."
      fullWidth
      margin="normal"
      onChange={(e) => setGlobalFilter(e.target.value)}
    />
  </div>
);

export default SearchComponent;

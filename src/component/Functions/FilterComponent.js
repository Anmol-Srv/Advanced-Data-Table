import React from 'react';
import Button from '@mui/material/Button';

const FilterComponent = ({ goBack }) => (
  <div>
    <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
      Go Back
    </Button>
    {/* Implement filtering UI here */}
    <p>Filtering UI goes here</p>
  </div>
);

export default FilterComponent;

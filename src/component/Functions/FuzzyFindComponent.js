import React from 'react';
import Button from '@mui/material/Button';

const FuzzyFindComponent = ({ goBack }) => (
  <div>
    <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
      Go Back
    </Button>
    {/* Implement fuzzy find UI here */}
    <p>Fuzzy find UI goes here</p>
  </div>
);

export default FuzzyFindComponent;

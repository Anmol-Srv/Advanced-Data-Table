// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const SearchComponent = ({ setGlobalFilter, goBack }) => (
//   <div>
//     <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
//       Go Back
//     </Button>
//     <TextField
//       placeholder="Search..."
//       fullWidth
//       margin="normal"
//       onChange={(e) => setGlobalFilter(e.target.value)}
//     />
//   </div>
// );

// export default SearchComponent;


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchComponent = ({ setGlobalFilter, goBack, closePanel }) => {
  const [searchText, setSearchText] = useState('');

  const handleApply = () => {
    setGlobalFilter(searchText);
    closePanel();
  };

  const handleRemove = () => {
    setSearchText('');
    setGlobalFilter('');
  };

  return (
    <div className='w-full mx-auto mt-10'>
      <Button className="mb-22" onClick={goBack} variant="contained" color="secondary">
        Go Back
      </Button>
      <TextField
        placeholder="Search..."
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => {
          setGlobalFilter(e.target.value)
          setSearchText(e.target.value)}}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleApply}>
          Apply
        </Button>
        <Button variant="contained" color="secondary" onClick={handleRemove}>
          Remove Search
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;

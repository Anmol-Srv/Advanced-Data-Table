// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Fuse from 'fuse.js';

// const FilterComponent = ({ setFilter, goBack, data }) => {
//   const [filters, setFilters] = useState({
//     name: '',
//     category: [],
//     subcategory: []
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const applyFilters = () => {
//     let filteredData = data;

//     // Apply name filter (fuzzy search)
//     if (filters.name) {
//       const fuse = new Fuse(data, { keys: ['name'], threshold: 0.3 });
//       filteredData = fuse.search(filters.name).map(result => result.item);
//     }

//     // Apply category filter
//     if (filters.category.length > 0) {
//       filteredData = filteredData.filter(item => filters.category.includes(item.category));
//     }

//     // Apply subcategory filter
//     if (filters.subcategory.length > 0) {
//       filteredData = filteredData.filter(item => filters.subcategory.includes(item.subcategory));
//     }

//     setFilter(filteredData);
//     goBack();
//   };

//   // Ensure columns is defined and contains the expected structure
//   const categoryOptions = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
//   const subcategoryOptions = data.map(item => item.subcategory).filter((value, index, self) => self.indexOf(value) === index);

//   return (
//     <div>
//       <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
//         Go Back
//       </Button>
//       <TextField
//         label="Name"
//         fullWidth
//         margin="normal"
//         value={filters.name}
//         onChange={e => handleFilterChange('name', e.target.value)}
//       />
//       <FormControl fullWidth margin="normal">
//         <InputLabel>Category</InputLabel>
//         <Select
//           multiple
//           value={filters.category}
//           onChange={e => handleFilterChange('category', e.target.value)}
//         >
//           {categoryOptions.map(option => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <FormControl fullWidth margin="normal">
//         <InputLabel>Subcategory</InputLabel>
//         <Select
//           multiple
//           value={filters.subcategory}
//           onChange={e => handleFilterChange('subcategory', e.target.value)}
//         >
//           {subcategoryOptions.map(option => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <Button onClick={applyFilters} variant="contained" color="primary" style={{ marginTop: '16px' }}>
//         Apply Filters
//       </Button>
//       <Button onClick={() => setFilters({ name: '', category: [], subcategory: [] })} variant="outlined" color="secondary" style={{ marginTop: '16px' }}>
//         Clear Filters
//       </Button>
//     </div>
//   );
// };

// export default FilterComponent;

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Fuse from 'fuse.js';

// const FilterComponent = ({ setFilter, goBack, data }) => {
//   const [filters, setFilters] = useState({
//     name: '',
//     category: [],
//     subcategory: []
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const applyFilters = () => {
//     let filteredData = data;

//     // Apply name filter (fuzzy search)
//     if (filters.name) {
//       const fuse = new Fuse(data, { keys: ['name'], threshold: 0.3 });
//       filteredData = fuse.search(filters.name).map(result => result.item);
//     }

//     // Apply category filter
//     if (filters.category.length > 0) {
//       filteredData = filteredData.filter(item => filters.category.includes(item.category));
//     }

//     // Apply subcategory filter
//     if (filters.subcategory.length > 0) {
//       filteredData = filteredData.filter(item => filters.subcategory.includes(item.subcategory));
//     }

//     setFilter(filteredData);
//     goBack();
//   };

//   const clearFilters = () => {
//     setFilters({ name: '', category: [], subcategory: [] });
//     setFilter(data); // Reset to original data
//   };

//   // Ensure columns is defined and contains the expected structure
//   const categoryOptions = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
//   const subcategoryOptions = data.map(item => item.subcategory).filter((value, index, self) => self.indexOf(value) === index);

//   return (
//     <div>
//       <Button onClick={goBack} variant="contained" color="secondary" style={{ marginBottom: '16px' }}>
//         Go Back
//       </Button>
//       <TextField
//         label="Name"
//         fullWidth
//         margin="normal"
//         value={filters.name}
//         onChange={e => handleFilterChange('name', e.target.value)}
//       />
//       <FormControl fullWidth margin="normal">
//         <InputLabel>Category</InputLabel>
//         <Select
//           multiple
//           value={filters.category}
//           onChange={e => handleFilterChange('category', e.target.value)}
//           renderValue={selected => selected.join(', ')}
//         >
//           {categoryOptions.map(option => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <FormControl fullWidth margin="normal">
//         <InputLabel>Subcategory</InputLabel>
//         <Select
//           multiple
//           value={filters.subcategory}
//           onChange={e => handleFilterChange('subcategory', e.target.value)}
//           renderValue={selected => selected.join(', ')}
//         >
//           {subcategoryOptions.map(option => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <Button onClick={applyFilters} variant="contained" color="primary" style={{ marginTop: '16px' }}>
//         Apply Filters
//       </Button>
//       <Button onClick={clearFilters} variant="outlined" color="secondary" style={{ marginTop: '16px' }}>
//         Clear Filters
//       </Button>
//     </div>
//   );
// };

// export default FilterComponent;

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Fuse from 'fuse.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Slider from '@mui/material/Slider';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const FilterComponent = ({ setFilter, goBack, data }) => {
  const [filters, setFilters] = useState({
    name: '',
    category: [],
    subcategory: [],
    startDate: null,
    endDate: null,
    priceRange: [0, 1000],
    salePriceRange: [0, 1000]
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [salePriceRange, setSalePriceRange] = useState([0, 1000]);

  useEffect(() => {
    const prices = data.map(item => item.price);
    const salePrices = data.map(item => item.sale_price).filter(price => price !== undefined);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const minSalePrice = salePrices.length ? Math.min(...salePrices) : 0;
    const maxSalePrice = salePrices.length ? Math.max(...salePrices) : 1000;
    setPriceRange([minPrice, maxPrice]);
    setSalePriceRange([minSalePrice, maxSalePrice]);
    setFilters(prev => ({
      ...prev,
      priceRange: [minPrice, maxPrice],
      salePriceRange: [minSalePrice, maxSalePrice]
    }));
  }, [data]);


  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const applyFilters = () => {
    let filteredData = data;

    // Apply name filter (fuzzy search)
    if (filters.name) {
      const fuse = new Fuse(data, { keys: ['name'], threshold: 0.3 });
      filteredData = fuse.search(filters.name).map(result => result.item);
    }

    // Apply category filter
    if (filters.category.length > 0) {
      filteredData = filteredData.filter(item => filters.category.includes(item.category));
    }

    // Apply subcategory filter
    if (filters.subcategory.length > 0) {
      filteredData = filteredData.filter(item => filters.subcategory.includes(item.subcategory));
    }

    // Apply date range filter
    if (filters.startDate || filters.endDate) {
      filteredData = filteredData.filter(item => {
        const itemDate = new Date(item.createdAt);
        const startDate = filters.startDate ? new Date(filters.startDate) : null;
        const endDate = filters.endDate ? new Date(filters.endDate) : null;

        return (
          (!startDate || itemDate >= startDate) &&
          (!endDate || itemDate <= endDate)
        );
      });
    }

    // Apply price range filter
    filteredData = filteredData.filter(item => {
      return item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    });

    // Apply sale price range filter
    filteredData = filteredData.filter(item => {
      return item.sale_price === null || (item.sale_price >= filters.salePriceRange[0] && item.sale_price <= filters.salePriceRange[1]);
    });    

    setFilter(filteredData);
    goBack();
  };

  const clearFilters = () => {
    setFilters({ name: '', category: [], subcategory: [], startDate: null, endDate: null, priceRange: priceRange, salePriceRange: salePriceRange   });
    setFilter(data); // Reset to original data
  };

  // Ensure columns is defined and contains the expected structure
  const categoryOptions = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
  const subcategoryOptions = data.map(item => item.subcategory).filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className='w-full mt-10'>
      <Button onClick={goBack} variant="contained" color="secondary">
        Go Back
      </Button>
      <div className='flex flex-col gap-10 mb-10'>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={filters.name}
        onChange={e => handleFilterChange('name', e.target.value)}
      />
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>Category</InputLabel>
        <Select
          multiple
          value={filters.category}
          onChange={e => handleFilterChange('category', e.target.value)}
          input={<OutlinedInput label="Category" />}
          renderValue={selected => (
            <Box >
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categoryOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>Subcategory</InputLabel>
        <Select
          multiple
          value={filters.subcategory}
          onChange={e => handleFilterChange('subcategory', e.target.value)}
          input={<OutlinedInput label="Subcategory" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {subcategoryOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', gap: 2, m: 1, width: 300 }}>
          <DatePicker
            label="Start Date"
            value={filters.startDate}
            onChange={date => handleFilterChange('startDate', date)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={filters.endDate}
            onChange={date => handleFilterChange('endDate', date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </LocalizationProvider>
      <Box sx={{ m: 1, width: 300 }}>
        <InputLabel>Price Range</InputLabel>
        <Slider
          value={filters.priceRange}
          onChange={(e, newValue) => handleFilterChange('priceRange', newValue)}
          valueLabelDisplay="on"
          min={priceRange[0]}
          max={priceRange[1]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{priceRange[0]}</span>
          <span>{priceRange[1]}</span>
        </Box>
      </Box>
      <Box sx={{ m: 1, width: 300 }}>
        <InputLabel>Sale Price Range</InputLabel>
        <Slider
          value={filters.salePriceRange}
          onChange={(e, newValue) => handleFilterChange('salePriceRange', newValue)}
          valueLabelDisplay="on"
          min={salePriceRange[0]}
          max={salePriceRange[1]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{salePriceRange[0]}</span>
          <span>{salePriceRange[1]}</span>
        </Box>
      </Box>
      </div>
      <div className='flex flex-row gap-3 justify-around'>
      <Button onClick={applyFilters} variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Apply Filters
      </Button>
      <Button onClick={clearFilters} variant="outlined" color="secondary" style={{ marginTop: '16px' }}>
        Clear Filters
      </Button>
      </div>
    </div>
  );
};

export default FilterComponent;

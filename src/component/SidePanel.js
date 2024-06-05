import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchComponent from './Functions/SearchComponent';
import SortComponent from './Functions/SortComponent';
import GroupComponent from './Functions/GroupComponent';
import FilterComponent from './Functions/FilterComponent';
import FuzzyFindComponent from './Functions/FuzzyFindComponent';

const SidePanel = ({
  open,
  onClose,
  columns,
  setGlobalFilter,
  setSorting,
}) => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  const goBack = () => {
    setActiveOption('');
  };

  const renderActiveOption = () => {
    switch (activeOption) {
      case 'search':
        return <SearchComponent setGlobalFilter={setGlobalFilter} goBack={goBack} />;
      case 'sort':
        return <SortComponent columns={columns} setSorting={setSorting} goBack={goBack} />;
      case 'group':
        return <GroupComponent columns={columns} goBack={goBack} />;
      case 'filter':
        return <FilterComponent goBack={goBack} />;
      case 'fuzzy':
        return <FuzzyFindComponent goBack={goBack} />;
      default:
        return renderOptions();
    }
  };

  const renderOptions = () => (
    <div>
      <Button
        startIcon={<SearchIcon />}
        fullWidth
        onClick={() => handleOptionSelect('search')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Search
      </Button>
      <Button
        startIcon={<SortIcon />}
        fullWidth
        onClick={() => handleOptionSelect('sort')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Sort
      </Button>
      <Button
        startIcon={<GroupWorkIcon />}
        fullWidth
        onClick={() => handleOptionSelect('group')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Group
      </Button>
      <Button
        startIcon={<FilterListIcon />}
        fullWidth
        onClick={() => handleOptionSelect('filter')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Filter
      </Button>
      <Button
        startIcon={<FindInPageIcon />}
        fullWidth
        onClick={() => handleOptionSelect('fuzzy')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Fuzzy Find
      </Button>
    </div>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 250, padding: 16 }}>
        <h3>Options</h3>
        <Divider />
        {renderActiveOption()}
      </div>
    </Drawer>
  );
};

export default SidePanel;/Functions/
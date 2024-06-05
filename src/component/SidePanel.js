import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SearchComponent from './Functions/SearchComponent';
import SortComponent from './Functions/SortComponent';
import GroupComponent from './Functions/GroupComponent';
import FilterComponent from './Functions/FilterComponent';
import ColumnVisibilityToggle from './Functions/ColumnVisibilityToggleComponent';

const SidePanel = ({
  open,
  onClose,
  columns,
  setFilter,
  data,
  setGlobalFilter,
  setSorting,
  setGrouping,
  activeOption,
  setActiveOption,
  columnVisibility,
  setColumnVisibility,
}) => {

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  const goBack = () => {
    setActiveOption('');
  };

  const renderActiveOption = () => {
    switch (activeOption) {
      case 'search':
        return <SearchComponent setGlobalFilter={setGlobalFilter} goBack={goBack} closePanel={onClose}/>;
      case 'sort':
        return <SortComponent columns={columns} setSorting={setSorting} goBack={goBack} />;
      case 'group':
        return <GroupComponent columns={columns} setGrouping={setGrouping} goBack={goBack} />;
      case 'filter':
        return <FilterComponent goBack={goBack} setFilter={setFilter} data={data} />;
      case 'toggleColumns':
        return <ColumnVisibilityToggle columns={columns} columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility} goBack={goBack} />;
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
        style={{ margin: '8px 0', height: '60px', fontSize: '20px'}}
      >
        Search
      </Button>
      <Button
        startIcon={<SortIcon />}
        fullWidth
        onClick={() => handleOptionSelect('sort')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0', height: '60px', fontSize: '20px'}}
      >
        Sort
      </Button>
      <Button
        startIcon={<GroupWorkIcon />}
        fullWidth
        onClick={() => handleOptionSelect('group')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0', height: '60px', fontSize: '20px'}}
      >
        Group
      </Button>
      <Button
        startIcon={<FilterListIcon />}
        fullWidth
        onClick={() => handleOptionSelect('filter')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0', height: '60px', fontSize: '20px'}}
      >
        Filter
      </Button>
      <Button
        startIcon={<FilterListIcon />}
        fullWidth
        onClick={() => handleOptionSelect('toggleColumns')}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0', height: '60px', fontSize: '20px'}}
      >
        Toggle Columns
      </Button>
    </div>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className='w-[550px] p-10 text-center'>
        <h3 className='font-bold text-4xl mb-8 text-gray-900 mb-10'>Options</h3>
        {renderActiveOption()}
      </div>
    </Drawer>
  );
};

export default SidePanel;/Functions/
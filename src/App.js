import React from 'react';
import DataTable from './component/DataTable';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Advanced Data Table</h1>
      <div className="bg-white shadow-md rounded">
        <DataTable />
      </div>
    </div>
  );
}

export default App;

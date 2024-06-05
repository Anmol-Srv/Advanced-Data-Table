import React from 'react';
import DataTable from './component/DataTable';
import './index.css'

function App() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-6xl font-bold my-6">Advanced Data Table</h1>
      <div className="bg-white shadow-md rounded">
        <DataTable />
      </div>
    </div>
  );
}

export default App;

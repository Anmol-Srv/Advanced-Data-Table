import React from 'react';
import DataTable from './component/DataTable';
import './index.css'

function App() {
  return (
    <div className="container flex flex-col mx-auto p-4">
      <h1 className="text-6xl justify-items-center flex font-bold mb-6">Advanced Data Table</h1>
      <div className="bg-white shadow-md rounded">
        <DataTable />
      </div>
    </div>
  );
}

export default App;

'use client'

import React, { useState } from 'react';

interface DataTableProps {
  data: any[];
  columns: string[];
}

export function DataTable({ data, columns }: DataTableProps) {
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (column === 'Actions') return; // Don't sort the Actions column
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter((item) =>
    Object.entries(item).some(([key, value]) =>
      key !== 'Actions' && String(value).toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortColumn && sortColumn !== 'Actions') {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="w-full font-sans">
      <input
        type="text"
        placeholder="Filter all fields"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((column) => (
                <th
                  key={column}
                  className="p-4 text-left text-sm font-semibold text-gray-700"
                >
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                    onClick={() => handleSort(column)}
                  >
                    {column}
                    {column !== 'Actions' && (
                      <span className="text-xs">
                        {sortColumn === column ? (sortDirection === 'asc' ? '▲' : '▼') : '▲▼'}
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100`}
              >
                {columns.map((column) => (
                  <td key={column} className="p-4 text-sm text-gray-600">
                    {column === 'Actions' ? item[column] : String(item[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

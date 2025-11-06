
import React from 'react';
import { TableRowData } from '../types';

const statusStyles = {
    Active: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    Discontinued: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
};

const DataTable: React.FC<{ data: TableRowData[] }> = ({ data }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-sm overflow-x-auto">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Product</th>
            <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Category</th>
            <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Sales</th>
            <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Revenue</th>
            <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="p-4 font-medium text-gray-800 dark:text-white whitespace-nowrap">{row.product}</td>
              <td className="p-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">{row.category}</td>
              <td className="p-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">{row.sales}</td>
              <td className="p-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">${row.revenue.toLocaleString()}</td>
              <td className="p-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[row.status]}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

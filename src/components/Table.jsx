import React from 'react';
import 'tailwindcss/tailwind.css';

const Table = ({ data }) => {
  return (
    <table className="border-collapse w-full h-full">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="vdit-c1 font-bold border-b-2 border-gray-300">{row.label}</td>
            <td className="vdit-c2 w-40 text-right border-b-2 border-gray-300">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
import React from "react";

function Table({ tableName, head, details }) {
  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
};

const cellStyle = {
    border: '1px solid black',
    padding: '8px',
};
  return (
    <div>
      {tableName ? <h2>{tableName}</h2> : ""}
      <table style={tableStyle}>
        <thead>
        <tr>
          {head && head.length > 0 ? (
            head.map((value, index) => <th key={index} style={cellStyle}>{value}</th>)
          ) : (
            <div>Headers for table not provided</div>
          )}
        </tr>
        </thead>
        <tbody>
       
          {details && details.length > 0 ? (
            details.map((value, index) => 
            (
              <tr>
            <td key={index} style={cellStyle}>{value.itemName}</td>
            <td key={index} style={cellStyle}>{value.hsnCode}</td>
            <td key={index} style={cellStyle}>{value.uom}</td>
            <td key={index} style={cellStyle}>{value.price}</td>
            <td key={index} style={cellStyle}>{value.shortDescription}</td>
            </tr>
            ))
          ) : (
            <div>No Data to render</div>
          )}
       
        </tbody>
      </table>
    </div>
  );
}

export default Table;

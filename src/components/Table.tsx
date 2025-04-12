import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';

interface Column {
    key: string;
    label: string;
  }
  
  interface TableProps {
    columns: Column[];
    data: any[];
  }

const DataTable = ({columns, data}:TableProps) => {
  return (
    <div className="table-container">
      <Table className="table">
        <TableHeader className="table-header">
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className="table-header-cell">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="table-row">
                {columns.map((column) => (
                  <TableCell key={column.key} className="table-cell">
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="table-empty">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable
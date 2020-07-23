import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableBody from '@material-ui/core/TableBody';
import MaterialTableCell from '@material-ui/core/TableCell';
import MaterialTableHead from '@material-ui/core/TableHead';
import MaterialTableRow from '@material-ui/core/TableRow';

const BasicTable = ({ tableData }) => {

  const { headers, rows } = tableData;

  return (
    <MaterialTable aria-label="table">
      <MaterialTableHead>
        <MaterialTableRow>
          {headers.map(header => (
            <MaterialTableCell>{header.display}</MaterialTableCell>
          ))}
        </MaterialTableRow>
      </MaterialTableHead>
      <MaterialTableBody>
        {rows.map(row =>
          <MaterialTableRow>
            {row.data.map(item =>
              <MaterialTableCell>{item.display}</MaterialTableCell>)}
          </MaterialTableRow>
        )}
      </MaterialTableBody>
    </MaterialTable>
  )
}
export default BasicTable

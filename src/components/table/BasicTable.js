import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableBody from '@material-ui/core/TableBody';
import MaterialTableCell from '@material-ui/core/TableCell';
import MaterialTableHead from '@material-ui/core/TableHead';
import MaterialTableRow from '@material-ui/core/TableRow';

const useBasicTableStyles = makeStyles({
  rowCell: {
    paddingBottom: '1rem',
    paddingTop: '1rem',
  },
});

const BasicTable = ({ tableData }) => {

  const classes = useBasicTableStyles();
  const { headers, rows } = tableData;

  return (
    <MaterialTable aria-label="table">
      <MaterialTableHead>
        <MaterialTableRow>
          {headers.map((header, index) => (
            <MaterialTableCell key={index} align={header.align ? header.align : 'left'}>
              {header.display}
            </MaterialTableCell>
          ))}
        </MaterialTableRow>
      </MaterialTableHead>
      <MaterialTableBody>
        {rows.map(row =>
          <MaterialTableRow>
            {row.data.map((item, index) =>
              <MaterialTableCell className={classes.rowCell} key={index} align={item.align ? item.align : 'left'}>
                {item.display}
              </MaterialTableCell>
            )}
          </MaterialTableRow>
        )}
      </MaterialTableBody>
    </MaterialTable>
  )
}
export default BasicTable

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableBody from '@material-ui/core/TableBody';
import MaterialTableCell from '@material-ui/core/TableCell';
import MaterialTableHead from '@material-ui/core/TableHead';
import MaterialTableRow from '@material-ui/core/TableRow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const CollapsibleTable = ({ tableData }) => {

  const { headers, rows } = tableData;
  return (

    <MaterialTable aria-label="collapsible table">
      <MaterialTableHead>
        <MaterialTableRow>
          <MaterialTableCell /> {/* empty header cell for collapse toggle column */}
          {headers.map(header => (
            <MaterialTableCell align={header.align ? header.align : 'left'}>{header.display}</MaterialTableCell>
          ))}
        </MaterialTableRow>
      </MaterialTableHead>
      <MaterialTableBody>
        {rows.map(row =>
          <CollapsibleRow row={row} />
        )}
      </MaterialTableBody>
    </MaterialTable>
  )
}
export default CollapsibleTable;

// ------

const CollapsibleRow = ({ row }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapse = () => setIsCollapsed(!isCollapsed);
  const isCollapsibleDataInRow = (row) => row.collapsedData ? true : false;
  const useCollapsibleRowStyles = makeStyles({
    collapsedRow: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  const classes = useCollapsibleRowStyles();
  return (
    <>
      <MaterialTableRow onClick={isCollapsibleDataInRow(row) ? collapse : () => { }} className={isCollapsibleDataInRow(row) ? classes.collapsedRow : null}>
        <MaterialTableCell> {/* only show a collapse toggle if there is data to collapse */}
          {isCollapsibleDataInRow(row) &&
            <IconButton aria-label="expand row" size="small" onClick={collapse}>
              {isCollapsed ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>}
        </MaterialTableCell>
        {row.data.map(item =>
          <MaterialTableCell align={item.align ? item.align : 'left'}>
            {item.display}
          </MaterialTableCell>
        )}
      </MaterialTableRow>
      {row.collapsedData &&
        <CollapsedRow colSpan={row.data.length + 1} collapsedData={row.collapsedData} isShowing={!isCollapsed} />}
    </>
  )
}

const CollapsedRow = ({ collapsedData, isShowing, colSpan }) => {

  const useCollapsedRowStyles = makeStyles({
    collapsedRow: {
      paddingBottom: isShowing ? '1rem' : 0,
      paddingTop: isShowing ? '1rem' : 0,
    },
  });
  const classes = useCollapsedRowStyles();

  return (
    <MaterialTableRow>
      <MaterialTableCell className={classes.collapsedRow} colSpan={colSpan}>
        <Collapse in={isShowing} timeout="auto" unmountOnExit>
          {collapsedData.display}
        </Collapse>
      </MaterialTableCell>
    </MaterialTableRow>
  )
}
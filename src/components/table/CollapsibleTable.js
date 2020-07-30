import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableBody from '@material-ui/core/TableBody';
import MaterialTableCell from '@material-ui/core/TableCell';
import MaterialTableHead from '@material-ui/core/TableHead';
import MaterialTableSortLabel from '@material-ui/core/TableSortLabel';
import MaterialTableRow from '@material-ui/core/TableRow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import RemoveIcon from '@material-ui/icons/Remove';

/*
tableData takes the following shape:
{
  headers: [
    display: item_to_display,
    align: string_of_[center, left, right]
  ],
  rows: [
    {
      display: item_to_display(incl_components),
      value: base_value,
      type: string_of_[numeric, date]
      align: string_of_[center, left, right]
    }
  ]
}
*/

const CollapsibleTable = ({ tableData }) => {



  const { headers, rows } = tableData;

  // always start by ordering based off the first header 
  const [orderBy, setOrderBy] = useState(0);
  const [isSortAsc, setIsSortAsc] = useState(true);

  // TODO wrap in useMemo/useEffect ?
  rows.sort((a, b) => {

    const value1 = a.data[orderBy].value;
    const type1 = a.data[orderBy].type;

    const value2 = b.data[orderBy].value;
    const type2 = b.data[orderBy].type;

    // default value for non-recognised or mismatching types is not to sort
    let placement = 0;
    if (type1 === type2) {
      if (type1 === 'numeric') {
        placement = !isSortAsc ? value1 - value2 : value2 - value1;
      } else if (type1 === 'date') {
        const momentValue1 = moment(value1);
        const momentValue2 = moment(value2);
        if (momentValue1.isBefore(momentValue2)) {
          placement = !isSortAsc ? 1 : -1;
        } else if (momentValue1.isAfter(momentValue2)) {
          placement = !isSortAsc ? -1 : 1;
        } else return 0
      }
    }

    return placement;

  });

  return (
    <MaterialTable aria-label="collapsible table">
      <MaterialTableHead>
        <MaterialTableRow>
          <MaterialTableCell /> {/* empty header cell for collapse toggle column */}
          {headers.map((header, index) => (
            <MaterialTableCell align={header.align ? header.align : 'left'}>
              <MaterialTableSortLabel
                active={orderBy === header.display}
                direction={isSortAsc ? 'asc' : 'desc'}
                onClick={() => { setIsSortAsc(!isSortAsc); setOrderBy(index) }}
              >
                {header.display}
              </MaterialTableSortLabel>
            </MaterialTableCell>
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
      <MaterialTableRow
        onClick={isCollapsibleDataInRow(row) ? collapse : () => { }}
        className={isCollapsibleDataInRow(row) ? classes.collapsedRow : null}>
        <MaterialTableCell> {/* only show a collapse toggle if there is data to collapse */}
          {isCollapsibleDataInRow(row) ?
            <IconButton aria-label="expand row" size="small" onClick={collapse}>
              {isCollapsed ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            : <NonButtonMaterialIconHolder>
              <RemoveIcon />
            </NonButtonMaterialIconHolder>}
        </MaterialTableCell>
        {row.data.map(item =>
          <MaterialTableCell align={item.align ? item.align : 'left'}>
            {item.display}
          </MaterialTableCell>
        )}
      </MaterialTableRow>
      {row.collapsedData ?
        <CollapsedRow colSpan={row.data.length + 1} collapsedData={row.collapsedData} isShowing={!isCollapsed} />
        : null}
    </>
  )
}

const CollapsedRow = ({ collapsedData = { display: null }, isShowing, colSpan }) => {

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

// --------

const NonButtonMaterialIconHolder = styled.div`
  flex: 0 0 auto;
  padding: 3;
  color: rgba(0, 0, 0, 0.54);
`
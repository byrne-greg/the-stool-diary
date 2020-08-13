import React, { useState } from 'react';
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
import Container from '@material-ui/core/Container';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import RemoveIcon from '@material-ui/icons/Remove';

const useTableStyles=makeStyles({
  row: {
    paddingTop: '4px',
    paddingBottom: '4px'
  },
  collapsedRow: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

/*
tableData takes the following shape:
{
  headers: [
    display: item_to_display,
    align: string_of_[center, left, right]
  ],
  rows: [
    {
      display: jsx_or_value_to_display,
      value: base_value,
      type: string_of_[numeric, date].
      align: string_of_[center, left, right],
      collapsedData: {
        display: jsx_or_value_to_display
      }
    }
  ]
}
*/
const CollapsibleTable = ({ tableData , showCollapsibleColumn=true, ariaLabel="collapsible table"}) => {

  const { headers, rows } = tableData;

  // always start by ordering based off the first header 
  const [orderBy, setOrderBy] = useState(0);
  const [isSortAsc, setIsSortAsc] = useState(false);

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
    <MaterialTable aria-label={ariaLabel}>
      <MaterialTableHead>
        <MaterialTableRow >
          {/* empty header cell for collapse toggle column */}
          {showCollapsibleColumn ? <MaterialTableCell/> : null}
          {headers.map((header, index) => (
            <MaterialTableCell key={index} align={header.align ? header.align : 'left'}>
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
        {rows.map((row, index) =>
          <CollapsibleRow key={`${row}-${index}`} row={row} showCollapsibleColumn={showCollapsibleColumn}/>
        )}
      </MaterialTableBody>
    </MaterialTable>
  )
}
export default CollapsibleTable;

// ------

const CollapsibleRow = ({ row , showCollapsibleColumn=true}) => {
  const classes = useTableStyles();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapse = () => setIsCollapsed(!isCollapsed);
  const isCollapsibleDataInRow = (row) => row.collapsedData ? true : false;

  return (
    <>
      <MaterialTableRow
        onClick={isCollapsibleDataInRow(row) ? collapse : () => { }}
        className={isCollapsibleDataInRow(row) ? classes.collapsedRow : null}>
        
        {/* only show the collapse column if configured to do so*/}
        {showCollapsibleColumn ? (
          <MaterialTableCell> 
            {/* only show the collapse down icon if there is data to show*/}
            {isCollapsibleDataInRow(row) ?
              <IconButton aria-label="expand row" size="small" onClick={collapse}>
                {isCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </IconButton>
              : <NonButtonMaterialIconHolder>
                <RemoveIcon />
              </NonButtonMaterialIconHolder>}
          </MaterialTableCell>
        ) : null}

        {row.data.map((item, index) =>
          <MaterialTableCell key={`${item.display}-${index}`} align={item.align ? item.align : 'left'}>
            {item.display}
          </MaterialTableCell>
        )}
      </MaterialTableRow>
      {row.collapsedData ?
        <CollapsedRow colSpan={showCollapsibleColumn ? row.data.length + 1 : row.data.length} collapsedData={row.collapsedData} isShowing={!isCollapsed} />
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
          <Container>
            {collapsedData.display}
          </Container>
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
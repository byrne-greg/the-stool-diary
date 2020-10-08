import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import MaterialTable from "@material-ui/core/Table"
import MaterialTableBody from "@material-ui/core/TableBody"
import MaterialTableCell from "@material-ui/core/TableCell"
import MaterialTableHead from "@material-ui/core/TableHead"
import MaterialTableRow from "@material-ui/core/TableRow"

const useBasicTableStyles = makeStyles({
  cell: {
    paddingBottom: "1rem",
    paddingTop: "1rem",
    paddingLeft: 1,
    paddingRight: 1,
  },
})

const BasicTable = ({ tableData }) => {
  const classes = useBasicTableStyles()
  const { headers, rows } = tableData

  return (
    <MaterialTable aria-label="table" className={classes.table}>
      <MaterialTableHead>
        <MaterialTableRow>
          {headers.map((header, index) => (
            <MaterialTableCell
              className={classes.cell}
              key={index}
              align={header.align ? header.align : "left"}
            >
              {header.display}
            </MaterialTableCell>
          ))}
        </MaterialTableRow>
      </MaterialTableHead>
      <MaterialTableBody>
        {rows.map((row, index) => (
          <MaterialTableRow key={index}>
            {row.data.map((item, index) => (
              <MaterialTableCell
                className={classes.cell}
                key={index}
                align={item.align ? item.align : "left"}
              >
                {item.display}
              </MaterialTableCell>
            ))}
          </MaterialTableRow>
        ))}
      </MaterialTableBody>
    </MaterialTable>
  )
}
export default BasicTable

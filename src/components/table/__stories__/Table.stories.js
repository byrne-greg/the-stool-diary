import React from 'react'

export default {
  title: "Table"
}

export const Info = () => <p>The following components are demonstrations of table composite components</p>

const mockHeaders = [
  { display: "Name" },
  { display: 'Description' },
  { display: "SKU" },
  { display: "Quantity" }
]
const mockRows = [
  {
    data: [
      { display: 'Sandwich Cutter' },
      { align: 'left', display: 'A cutter for sandwiches' },
      { align: 'right', display: 'A213' },
      { align: 'center', display: 12 }]
  },
  {
    data: [
      { display: 'Pizza Cutter' },
      { align: 'left', display: 'A cutter for pizza' },
      { align: 'right', display: 'B132' },
      { align: 'center', display: 8 }],
    collapsedData: {
      display: <p>Pizza cutters are great for cutting pizza</p>
    }
  },
  {
    data: [
      { display: 'Box Cutter' },
      { align: 'left', display: 'A cutter for boxes' },
      { align: 'right', display: 'C321' },
      { align: 'center', display: 4 }
    ],
    collapsedData: {
      display: <p>Box cutters can come in all shapes and sizes</p>
    }
  },
]

const mockTableData = {
  headers: mockHeaders,
  rows: mockRows
}


import { Table } from '../'
export const Basic_Table = () => <Table tableData={mockTableData} />


import { CollapsibleTable } from '../'
export const Collapsible = () => <CollapsibleTable tableData={mockTableData} />








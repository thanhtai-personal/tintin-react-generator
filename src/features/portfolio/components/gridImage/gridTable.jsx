import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = ({ width, height }) => (makeStyles((theme) => {
  return {
    gridTable: {
      borderCollapse: 'collapse',
      border: '1px solid black',
      pointerEvents: 'none',
      overflow: 'hidden',
    },
    tableWrapper: {
      position: 'absolute',
      pointerEvents: 'none',
      overflow: 'hidden',
      maxHeight: '90vh'
    }
  }
}))

const GridTable = (props) => {
  const { width, height, numCols, numRows } = props
  const classes = useStyle({})()
  const [gridContent, setGridContent] =  useState(<tr><td></td></tr>)

  useEffect(() => {
    let rows = []
    for (let i = 0; i < numRows; i++) {
      let cols = []
      for (let j = 0; j < numCols; j++) {
        cols.push(<td key={`grid-row-${i}-col-${j}`} style={{
          border: '1px solid black',
          borderCollapse: 'collapse',
          backgroundColor: 'transparent',
          height: `${height}px`,
          width: `${width}px`
        }}></td>)
      }
      rows.push(<tr key={`grid-row-${i}`}>{cols}</tr>)
    }
    setGridContent(rows)
  }, [numCols, numRows, width, height])
  
  return (
    <div className={classes.tableWrapper}>
      <table className={classes.gridTable}>
        <tbody>
          {gridContent}
        </tbody>
      </table>
    </div>
  )
}

export default GridTable
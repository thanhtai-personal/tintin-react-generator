import React, { useState, useCallback } from 'react'
import { Grid, makeStyles, Switch, NativeSelect, Typography, Input, Checkbox } from '@material-ui/core'
import { documentSizeToImageSize } from './utils'
import { documentSize, documentSizeVertical } from './constants'
import GridTable from './gridTable'
const fileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon'
];

const documentSizeOptions = Object.keys(documentSize).map((key, index) => (
  {
    key: `document-size-option-${key}-${index}`,
    value: key,
    ...documentSize[key]
  }
))

const documentSizeOptionsElem = documentSizeOptions.map((item, index) => (
  <option key={item.key} value={item.value}>
    {item.label}
  </option>
))

const useStyle = () => (makeStyles((theme) => {
  return {
    gridImageContainer: {
    },
    fileUpload: {
    },
    imageWrapper: {
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    actions: {
    },
    actionLabel: {
      fontSize: '12px'
    }
  }
}))

const GridImageComponent = (props) => {
  const [picture, setPicture] = useState('')
  const [isRotate, setIsRotate] = useState(false)
  const [isShowGrid, setIsShowGrid] = useState(false)
  const [paperSize, setPaperSize] = useState(null)
  const [numOfGrid, setNumOfGrid] = useState(0)
  const [gridTableData, setGridTableData] = useState({
    width: 0,
    height: 0,
    numCols: 0,
    numRows: 0
  })
  const classes = useStyle({})()

  const handleChangeUploadInput = useCallback((event) => {
    const files = event.target.files
    const file = files && files[0] ? files[0] : {}
    setPicture(URL.createObjectURL(file))
  }, [setPicture])

  const handleChangeShowGridSwitch = useCallback((event, data) => {
    handleGridTableData()
    setIsShowGrid(data)
  }, [setIsShowGrid])

  const handleGridTableData = useCallback(() => {
    if (!paperSize || numOfGrid < 1) return
    const imageEle = document.getElementById('image')
    if (!imageEle) return
    const gridSize = documentSizeToImageSize(isRotate ? documentSizeVertical[paperSize]: documentSize[paperSize], {
      width: imageEle.offsetWidth,
      height: imageEle.offsetHeight
    })
    const gridBox = gridSize.getGridSize(numOfGrid)
    setGridTableData({
      ...gridBox,
      numCols: numOfGrid,
      numRows: (gridSize.height / gridBox.height) + 1
    })
  }, [numOfGrid, paperSize, isRotate])

  const handleChangeNumOfGrid = useCallback((e) => {
    setNumOfGrid(parseInt(e.target?.value || -1))
    handleGridTableData()
  }, [handleGridTableData])

  const handleChangePaperSize = useCallback((event) => {
    const value = event?.target?.value
    setPaperSize(value)
    handleGridTableData()
  }, [handleGridTableData, setPaperSize])

  const handleChangeIsRotate = useCallback((event) => {
    const checked = event.target.checked
    setIsRotate(checked)
    handleGridTableData()
  }, [handleGridTableData, setIsRotate])

  return (<>
    <div className={classes.gridImageContainer}>
      <div className={classes.imageWrapper}>
        {isShowGrid && <GridTable
          {...gridTableData}
        />}
        <img id='image' className={classes.image} src={picture} />
      </div>
      <Grid container spacing={1} className={classes.actions}>
        <Grid item xs={12}>
          <input type='file' classes={classes.fileUpload}
            onChange={handleChangeUploadInput}
            accept={fileTypes.reduce((ft, current) => (`${current}, ${ft}`))}
            multiple={false}
          ></input>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant={'body2'} className={classes.actionLabel}>Show grid:</Typography>
              <Switch label='secondary' checked={isShowGrid} onChange={handleChangeShowGridSwitch} />
            </Grid>
            <Grid item xs={2}>
              <Typography variant={'body2'} className={classes.actionLabel}>Paper size: </Typography>
              <NativeSelect
                defaultValue={paperSize}
                onChange={handleChangePaperSize}
              >
                {documentSizeOptionsElem}
              </NativeSelect>
            </Grid>
            <Grid item xs={2}>
              <Typography variant={'body2'} className={classes.actionLabel}>Num of columns: </Typography>
              <Input type={'number'} inputProps={{ max: 16, min: 0 }} defaultValue={numOfGrid} onChange={handleChangeNumOfGrid} />
            </Grid>
            <Grid item xs={2}>
              <Typography variant={'body2'} className={classes.actionLabel}>Is rotate 90: </Typography>
              <Checkbox defaultValue={isRotate} onChange={handleChangeIsRotate} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </>)
}

export default GridImageComponent
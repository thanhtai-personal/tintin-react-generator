import React, { useReducer, useCallback } from 'react'
import MenuButton from './commons/menuButton'
import menuButtonsData from './data/menuButtons'
import leftMenuReducer from './../../../reducers/leftMenu.reducer'
import { UPDATE_ACTIVE_LEFT_MENU } from './../../../actions/types'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => {
  return {
    menuButtons: {
      display: 'block',
      textAlign: 'center'
    }
  }
})

const MenuButtons = (props) => {
  const classes = useStyle()
  const [{ menuItems }, setMenuButton] = useReducer(leftMenuReducer, { menuItems: menuButtonsData })

  const setActiveMenu = useCallback((e, data) => {
    setMenuButton({ type: UPDATE_ACTIVE_LEFT_MENU, payload: data.value })
  }, [setMenuButton])

  return (
    <nav className={classes.menuButtons}>
      {menuItems.map((menuButton, index) => (
        <MenuButton {...menuButton} key={`${menuButton?.key}-${index}`} onClick={setActiveMenu} value={menuButton?.key}/>
      ))}
    </nav>
  )
}

export default MenuButtons
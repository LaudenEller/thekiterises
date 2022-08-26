// This component will display the bar at the top of every page, it will contain the website logo and a hamburger link

import React from "react"
import { useHistory } from "react-router-dom"
import { DrawerToggleButton } from "./DrawerToggler"
import "./NavBar.css"

export const NavBar = props => {
  const history = useHistory()
  return (
    <nav className="nav">
        <DrawerToggleButton click={props.drawerClickHandler} />
      <hr className="page_separator" />
    </nav >
  )
}

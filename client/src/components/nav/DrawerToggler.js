import React from "react";
import "./DrawerToggler.css"

const DrawerToggleButton = (props) => {

  return (
    <>
      <div id="nav_toggler" className="nav_toggler wixui-vector-image" data-angle="0" data-angle-style-location="style" style={{ opacity: "0" }}>
        <a data-testid="linkElement" data-popupid="hb7v8" target="_self" role="button" className="toggler_link" tabindex="0">
          <div data-testid="svgRoot-nav_toggler" className="animation vector nav_toggler">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--title" onClick={props.click}>
              <title id="svgcid--title"></title>
              <g>
                <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
                <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
                <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
              </g>
            </svg></div></a>
      </div>
      <div id="nav_toggler_media" className="nav_toggler_media wixui-vector-image">
        <a data-testid="linkElement" data-popupid="hb7v8" target="_self" role="button" className="toggler_link" tabindex="0">
          <div data-testid="svgRoot-nav_toggler_media" className="animation vector cursor_effect nav_toggler_media">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-title_media" onClick={props.click}>
              <title id="svgcid-title_media"></title>
              <g>
                <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
                <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
                <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
              </g>
            </svg>
          </div></a>
      </div>
    </>
  )
}

export default DrawerToggleButton
// HELP: Why is this component separate from the NavBar component??? 
// This component displays hamburger style button that opens and closes the nav bar, 
  // it also has an animation which wiggle the button conditionally through props
  
import  React  from "react";
import "./DrawerToggler.css"

export const DrawerToggleButton = (props) => {

return ( 
  <div id="toggle-button-box">
  
  <svg className='toggle-button' onClick={props.click} preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--t49ec191x7to"><title id="svgcid--t49ec191x7to"></title>
    <g>
        <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
        <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
        <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
    </g>
</svg>
</div>

//   <button id="toggle-button-id" className='toggle-button' onClick={props.click}>
//   <div className="toggle-button-line"></div>
//   <div className="toggle-button-line"></div>
//   <div className="toggle-button-line"></div>
// </button>
    
)}


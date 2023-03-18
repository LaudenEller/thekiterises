// This component will display the bar at the top of every page, it will contain the website logo and a hamburger link

import React from "react"
import { DrawerToggleButton } from "./DrawerToggler"
import "./NavBar.css"

export const NavBar = props => {

  return (
<>
    {/* <section id="navBar_section" className="navBar_section_container page_bg" tabIndex={-1}>
        <div id="navBar_title" className="navBar_title titleText">
            <p className="font_8">
              <a href="https://www.thekiterises.com" target="_self">
              Creative Agency
              </a></p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section> */}
    <section id="nav_bar" className = "bgColors nav_bar-content" tabIndex = {- 1}>
        <div id="nav_bar-text" className="textRules" data-testid="richTextElement">
          <p class="font_8"><a href="https://www.thekiterises.com" target="_self">Creative Agency</a></p>
          {/* <img src="/LogoTKR.png" alt="TKR logo"></img> */}
        </div>
        <div id="nav_bar-toggle">
          <DrawerToggleButton click={props.drawerClickHandler} />
          {/* <a data-testid="linkElement" data-popupid="hb7v8" target="_self" role="button" className="_2wYm8" tabIndex="0">
            <div data-testid="svgRoot-comp-ka50ygrl_r_comp-l1ba4x9l" className="_3bLYT _2OIRR N1N2o">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-jd2soa577qm8">
            <title id="svgcid-jd2soa577qm8"></title>
            <g>
            <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
            <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
            <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
            </g>
            </svg>
          </div></a> */}
        </div>
        </section >
        </>

    /* <nav className="nav">
    <img src="/LogoTKR.png" alt="TKR logo"></img>
    <DrawerToggleButton click={props.drawerClickHandler} />
    
    </nav > */

  // return (
  //   <>
  //     <section id="comp-ka50ygrl_r_comp-k6gjwdd6" class="_3uJnK comp-ka50ygrl_r_comp-k6gjwdd6-container undefined" data-testid="section-container">
  //       <div id="comp-ka50ygrl_r_comp-k9s87bm3" class="_1Q9if _3bcaz" data-testid="richTextElement">
  //         <p class="font_8">
  //           <a href="https://www.thekiterises.com" target="_self" tabindex="0">Creative Agency</a>
  //         </p>
  //       </div>
  //       <div id="comp-ka50ygrl_r_comp-k9wga0tn" class="" data-angle="0" data-angle-style-location="style" style="opacity: 0;">
  //         <a data-testid="linkElement" data-popupid="hb7v8" target="_self" role="button" class="_2wYm8" tabindex="0">
  //           <div data-testid="svgRoot-comp-ka50ygrl_r_comp-k9wga0tn" class="_3bLYT _2OIRR">
  //             <svg preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-2d6x8dfpc7y5"><title id="svgcid-2d6x8dfpc7y5"></title>
  //               <g>
  //                 <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
  //                 <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
  //                 <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
  //               </g>
  //             </svg>
  //           </div>
  //         </a>
  //       </div>
  //       <div id="comp-ka50ygrl_r_comp-krcoubyd" class="comp-ka50ygrl_r_comp-krcoubyd-container">
  //         <div id="comp-ka50ygrl_r_comp-krcouc04" class="_3Wf7h">
  //           <button class="_3omZ_" tabindex="0">
  //             <div class="_3OYGH">
  //               <div id="defaultAvatar-comp-ka50ygrl_r_comp-krcouc04" class="">
  //                 <div data-testid="svgRoot-defaultAvatar-comp-ka50ygrl_r_comp-krcouc04" class="_3bLYT _2OIRR KkkFB">
  //                   <svg data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  //                     <g>
  //                       <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
  //                     </g>
  //                   </svg></div></div></div>
  //             <span class="_1UDJF">Log In</span>
  //           </button>
  //         </div></div>
  //       <div id="comp-ka50ygrl_r_comp-kzc2elnt"></div>
  //       <div id="comp-ka50ygrl_r_comp-l1ba4x9l" class="">
  //         <a data-testid="linkElement" data-popupid="hb7v8" target="_self" role="button" class="_2wYm8" tabindex="0">
  //           <div data-testid="svgRoot-comp-ka50ygrl_r_comp-l1ba4x9l" class="_3bLYT _2OIRR N1N2o">
  //             <svg preserveAspectRatio="xMidYMid meet" data-bbox="21 21 158 158" viewBox="21 21 158 158" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-wlf4golo76db">
  //               <title id="svgcid-wlf4golo76db"></title>
  //               <g>
  //                 <path fill="#000001" d="M179 100c0 43.63-35.37 79-79 79s-79-35.37-79-79 35.37-79 79-79 79 35.37 79 79z" data-color="1"></path>
  //                 <path fill="#FFFFFF" d="M145 84v6H55v-6h90z" data-color="2"></path>
  //                 <path fill="#FFFFFF" d="M145 109v6H55v-6h90z" data-color="2"></path>
  //               </g>
  //             </svg>
  //           </div>
  //         </a>
  //       </div>
  //       <div id="comp-ka50ygrl_r_comp-l4zait38" class="_1Q9if _3bcaz" data-testid="richTextElement">
  //         <p class="font_8">
  //           <a href="https://www.thekiterises.com" target="_self" tabindex="0">Creative Agency</a>
  //         </p>
  //       </div>
  //     </section>
  //   </>
  // )
  )
}

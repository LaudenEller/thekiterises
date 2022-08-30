// This component will open a navbar menu, it will display the window animation and links to the each page: About Us; Our Work; etc

import React, { useEffect, useState, useHistory } from "react";
import "./SideDrawer.css"

function SideDrawer({ show, setSideDrawerOpen, sideDrawerOpen }) {
    const [user, setUser] = useState()
    const [editForm, setEditForm] = useState(false)
    const [refreshUser, setRefreshUser] = useState(false)

    // useEffect(
    //     () => {
    //         getUser(1)
    //             .then(d => setUser(d))
    //     },
    //     []
    // )

    // const history = useHistory()

    let drawerClasses = 'sidedrawer'
    if (show) {
        drawerClasses = 'sidedrawer open'
    }

    // Updates state with input from the update user form
    const ChangeUserState = (domEvent) => {
        const copy = { ...user }
        copy[domEvent.target.name] = domEvent.target.value
        setUser(copy)
    }

    // Sends updated user profile to db, refreshes the profile on the DOM and closes the edit form
    // const UpdateUser = (e) => {
    //     e.preventDefault()
    //     const updatedUser = {
    //         username: user.username,
    //         first_name: user.first_name,
    //         last_name: user.last_name,
    //         email: user.email,
    //         id: user.id
    //     }
    //     return updateUser(updatedUser)
    //         .then(() => {
    //             setRefreshUser(!refreshUser)
    //             setEditForm(!editForm)
    //         })
    // }

    // return (
    //     <nav style={{ display: "flex" }} className={drawerClasses}>
    //     <Box className="content_box" sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", height: "100%" }}>
    //                      <h1 style={{ alignSelf: "center", marginTop: "35px", marginBottom: "400px" }}
    //                         onClick={() => {
    //                             setSideDrawerOpen(!sideDrawerOpen)
    //                             history.push({pathname: "/profile" })
    //                         }}>
    //                         Profile
    //                     </h1>
    //                     <Box>
    //                         {/* // Render the user's profile */}
    //                         {/* Pass refresh state, user, setRefresh, to User */}
    //                         <User ChangeUserState={ChangeUserState} UpdateUser={UpdateUser} user={user} editForm={editForm} setEditForm={setEditForm} />
    //                     </Box>
    //                     <Button variant="contained"
    //                         sx={{
    //                             background: "grey",
    //                             ":hover": {
    //                                 background: "grey"
    //                             },
    //                             margin: "0.5em"
    //                         }}
    //                         onClick={() => {
    //                             localStorage.removeItem("auth_token")
    //                             history.push({pathname: "/login" })
    //                         }}>
    //                         Logout
    //                     </Button>
    //         </Box >
    //     </nav >
    // )

    return (
        <>
        <p>Test</p>
            {/* <div id="POPUPS_ROOT" class="_21cN2">
                <div id="popups-wrapper" class="DPb1o" tabindex="-1" role="dialog">
                    <div id="hb7v8" class="_1Munm _3BB23">
                        <div class="_2NcFF" data-testid="responsivePopupPageBg">

                        </div>
                        <div class="hb7v8-container _1qSLn" data-testid="responsive-container-content">
                            <div class="_1x_pZ">
                                <div id="comp-k9wgdepw" class="comp-k9wgdepw-container" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style="visibility: inherit;"><div class="_2NcFF" data-testid="responsivePopupContainerBg">
                                </div>
                                    <div id="comp-k9wgdeq2" class="_3ImoN" data-testid="popupCloseIconButtonRoot">
                                        <div tabindex="0" role="button" title="Back to site" aria-label="Back to site" class="_1RsPI">
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="25.975 25.975 148.05 148.05" xmlns="http://www.w3.org/2000/svg" viewBox="25.975 25.975 148.05 148.05" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <nav id="comp-kc36zghz" aria-label="Site" class="Ng_4d">
                                        <ul class="_1W1vp">
                                            <li data-testid="comp-kc36zghz-0" aria-current="page" class="_24LNX _11rUu _2AxyX">
                                                <div data-testid="itemWrapper" class="_3slSb">
                                                    <span data-testid="linkWrapper" class="_2-VSr">
                                                        <a data-testid="linkElement" href="https://www.thekiterises.com" target="_self" class="_20QND">Home</a></span></div></li>
                                            <li data-testid="comp-kc36zghz-1" class="_24LNX _11rUu">
                                                <div data-testid="itemWrapper" class="_3slSb">
                                                    <span data-testid="linkWrapper" class="_2-VSr">
                                                        <a data-testid="linkElement" href="https://www.thekiterises.com/ourwork" target="_self" class="_20QND">Work</a></span></div></li>
                                            <li data-testid="comp-kc36zghz-2" class="_24LNX _11rUu">
                                                <div data-testid="itemWrapper" class="_3slSb">
                                                    <span data-testid="linkWrapper" class="_2-VSr">
                                                        <a data-testid="linkElement" href="https://www.thekiterises.com/about" target="_self" class="_20QND">About</a></span></div></li>
                                        </ul>
                                    </nav>
                                    <div id="comp-kc36sbey" class="_3Fes4 comp-kc36sbey-container">
                                        <div class="_2l-6d"></div>
                                        <div id="comp-k9wgk930" class="_3WZb8" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style="visibility: inherit;">
                                            <ul class="_2upBq" aria-label="Social Bar">
                                                <li id="dataItem-k9wgk95e8-comp-k9wgk930" class="_2lHsw">
                                                    <a data-testid="linkElement" href="https://www.instagram.com/thekiterises" target="_blank" rel="noreferrer noopener" class="_2MTXI">
                                                        <wix-image id="img_0_comp-k9wgk930" class="_1-6YJ t7wUO" data-image-info="{&quot;containerId&quot;:&quot;dataItem-k9wgk95e8-comp-k9wgk930&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;81af6121f84c41a5b4391d7d37fce12a.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png">
                                                            <img alt="Instagram" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" style="width: 32px; height: 32px; object-fit: cover;" />
                                                        </wix-image></a></li>
                                            </ul>
                                        </div>
                                        <div id="comp-kam4swtq" class="_1Q9if _3bcaz" data-testid="richTextElement">
                                            <p class="font_5">
                                                9115 SW Burnham St, Portland, OR 97223<br>
                                                    INFO@THEKITERISES.COM</br>
                                                971-280-5084
                                            </p>
                                        </div>
                                    </div>
                                    <div id="comp-kaggs4rl" class="_1EyUC comp-kaggs4rl-container" data-audio="off" data-no-audio="" data-playing="" data-animate-poster="none" data-has-alpha="true" data-can-play="" data-show-canvas=""><div class="_1zNyT _3SQDg" tabindex="0" role="button" aria-label=" Play video" aria-pressed="true">
                                        <div id="bgLayers_comp-kaggs4rl" data-hook="bgLayers" class="_3wnIc IfnBz">
                                            <div id="bgMedia_comp-kaggs4rl" class="_2GUhU">
                                                <wix-video id="videoContainer_comp-kaggs4rl" data-video-info="{&quot;fittingType&quot;:&quot;fit&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;hasBgScrollEffect&quot;:&quot;&quot;,&quot;bgEffectName&quot;:&quot;&quot;,&quot;videoId&quot;:&quot;11062b_06547678bdf84891bfd920c3db53863a&quot;,&quot;videoWidth&quot;:1414,&quot;videoHeight&quot;:1080,&quot;qualities&quot;:[{&quot;quality&quot;:&quot;480p&quot;,&quot;size&quot;:301440,&quot;url&quot;:&quot;video/11062b_06547678bdf84891bfd920c3db53863a/480p/mp4/file.mp4&quot;},{&quot;quality&quot;:&quot;720p&quot;,&quot;size&quot;:678240,&quot;url&quot;:&quot;video/11062b_06547678bdf84891bfd920c3db53863a/720p/mp4/file.mp4&quot;},{&quot;quality&quot;:&quot;1080p&quot;,&quot;size&quot;:1527120,&quot;url&quot;:&quot;video/11062b_06547678bdf84891bfd920c3db53863a/1080p/mp4/file.mp4&quot;}],&quot;isVideoDataExists&quot;:&quot;1&quot;,&quot;videoFormat&quot;:&quot;mp4&quot;,&quot;playbackRate&quot;:1,&quot;autoPlay&quot;:true,&quot;containerId&quot;:&quot;comp-kaggs4rl&quot;,&quot;animatePoster&quot;:&quot;none&quot;}" class="_3hRfg bgVideo _1PtAB">
                                                    <video id="comp-kaggs4rl_video" class="_3vVMz" role="presentation" crossorigin="anonymous" playsinline="" preload="auto" loop="" tabindex="-1" src="https://video.wixstatic.com/video/11062b_06547678bdf84891bfd920c3db53863a/480p/mp4/file.mp4">
                                                    </video>
                                                    <wix-image id="comp-kaggs4rl_img" class="_1-6YJ _2IRVt _1QuqS bgVideoposter" data-image-info="{&quot;containerId&quot;:&quot;comp-kaggs4rl&quot;,&quot;targetWidth&quot;:160,&quot;targetHeight&quot;:90,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fit&quot;,&quot;imageData&quot;:{&quot;width&quot;:1832,&quot;height&quot;:1400,&quot;uri&quot;:&quot;11062b_06547678bdf84891bfd920c3db53863af000.png&quot;,&quot;displayMode&quot;:&quot;fit&quot;,&quot;quality&quot;:{&quot;unsharpMask&quot;:{&quot;radius&quot;:0.33,&quot;amount&quot;:1,&quot;threshold&quot;:0}},&quot;devicePixelRatio&quot;:1}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/11062b_06547678bdf84891bfd920c3db53863af000.png/v1/fill/w_150,h_115,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_06547678bdf84891bfd920c3db53863af000.png">
                                                        <img src="https://static.wixstatic.com/media/11062b_06547678bdf84891bfd920c3db53863af000.png/v1/fill/w_150,h_115,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_06547678bdf84891bfd920c3db53863af000.png" alt="" style="width: 150px; height: 150px; object-fit: contain; object-position: center center;"/>
                                                    </wix-image>
                                                </wix-video>
                                                <canvas id="comp-kaggs4rlwebglcanvas" class="_6ICOI webglcanvas" aria-label="" role="presentation" data-testid="canvas" width="628" height="480" style="height: 100%; width: 100%; object-fit: contain; object-position: center center;">
                                                </canvas>
                                            </div>
                                        </div>
                                    </div>
                                        <div id="comp-kaggs52o"></div>
                                        <div id="comp-kaggs531"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SideDrawer
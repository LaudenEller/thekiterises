// This module will display the home page including:
// welcome animation
// description section
// services section

import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm"
import "./Home.css"

const Home = () => {
    // fetches data from the db and displays it to the DOM (will delete from final version)
    const [worksamples, setWorksamples] = useState([])

    useEffect(() => {
        const fetchIt = async () => {
            const response = await fetch('/api/worksamples')
            const json = await response.json()

            if (response.ok) {
                setWorksamples(json)
            }
        }
        fetchIt()
    }, [])

    return (
        // parent container for this page's content that's sandwiched between the navbar and the footer 
        <div classNameName="home">
            {/* fetched data that will be removed from this page */}
            <div classNameName="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div>
            {/* animation container */}
            {/* HELP: the banner is sizing correctly: it's too tall
                It may be solved once the other elements in the HTML are resized */}
            <section className='welcome-animation-container'>
                <div className='masthead-image' id='master-container'>
                    <div className='content center'>
                        <h1 id='master'>
                            <div>Hello</div>
                            <div id='master-container-scroller'>
                                <div className='master-container-scroller_item'>
                                    <a className='cta-link' href='#'>Friend</a>.
                                </div>
                                <div className='master-container-scroller_item'>
                                    <a className='cta-link' href='#'>Partner.</a>
                                </div>
                                <div className='master-container-scroller_item'>
                                    <a className='cta-link' href='#'>Friend</a>.
                                </div>
                            </div>
                            <div>Let's grow together!</div>
                        </h1>
                    </div>
                </div>
            </section>
            {/* description container */}
            {/* Add Description container
            Add image container
            Add text container
                Add background highlight to "FULL-SERVICE" matching background color of next section
             */}
            <section className="description-container">
                <div className="image-container">
                    <img src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_466,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg" alt="" style={{ objectFit: "cover", objectPosition: "50% 50%", width: "100%" }} />
                    </div>
                    <div className="text-container">
                    <h2 className="font_2"><span><span>WE ARE A</span></span></h2>
                        <h2 className="font_2"><span><span><span className="backcolor_16">FULL-SERVICE</span></span></span></h2>
                        <h2 className="font_2"><span><span>AGENCY</span></span></h2>

                    </div>
                
            </section>
            {/* Add Services container with background "color rgb(var(--color_16))"
            Add five service list containers
            Add five uls */}
            {/* services container */}
            <div classNameName="services-banner-container">
                <section id="services_list" className="_3uJnK services_list-container undefined" data-testid="section-container">
                    <div id="bgLayers_services_list" data-hook="bgLayers" className="_3wnIc">
                        <div data-testid="colorUnderlay" className="_3KzuS _3SQN-"></div>
                        <div id="bgMedia_services_list" className="_2GUhU"></div></div>
                    <div id="comp-l7f6x239" className="_38Oww" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{ visibility: "inherit" }}>
                        <div className="comp-l7f6x239-container" data-testid="responsive-container-content" role="list">
                            <div id="comp-l7f6x23g__item1" role="listitem" className="_3Fes4 comp-l7f6x23g-container">
                                <div className="_2l-6d"></div>
                                <div id="comp-l7f6x23j__item1" className="_3Fes4 comp-l7f6x23j-container">
                                    <div className="_2l-6d"></div>
                                    <div id="comp-l7f6x23l__item1" className="_1Q9if _3bcaz" data-testid="richTextElement">
                                        <h2 className="font_2"><span>Digital Strategy</span></h2>
                                    </div>
                                    <div id="comp-l7f6x23o__item1" className="_1Q9if _3bcaz" data-testid="richTextElement">
                                        <ul className="font_8" style={{ textAlign: "left" }}>
                                            <li>
                                                <p className="font_8">Content Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Growth Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Brand Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Customer Experience Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Digital Advertising Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Research</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Customer Journey Map</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Mystery Shopper</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Benchmarketing</p>
                                            </li>
                                            <li>
                                                <p className="font_8">360 (SWOT)</p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-j9ples3e" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-j9ples3e" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Design</h2></div><div id="comp-l7f6x23o__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8">Brand Identity</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Naming</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Packaging</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Menus</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Web Design</p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-k67jq4md" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-k67jq4md" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Marketing</h2></div><div id="comp-l7f6x23o__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Consulting</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Development</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Media Planning</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Copywriting</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Social Media Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>SEO / SEM</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Paid Advertising</span></p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-l7f75lkn" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f75lkn" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Content Creation</span></h2></div><div id="comp-l7f6x23o__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Photo &amp; Video Production</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Drone Content</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Film Content</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Styling</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Art Direction</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Post - Production</span></p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-l7f77lx4" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f77lx4" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Influencer Marketing</h2></div><div id="comp-l7f6x23o__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Content Strategy</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8">Influencer matchmaking</p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Social Media Advertising</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Production and Content Creation</span></p>
                                            </li>
                                        </ul></div></div></div></div><div className="comp-l7f6x239-container" data-testid="responsive-container-content" role="list"><div id="comp-l7f6x23g__item1" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item1" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item1" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Digital Strategy</span></h2></div><div id="comp-l7f6x23o__item1" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8" style={{ textAlign: "left" }}>
                                            <li>
                                                <p className="font_8">Content Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Growth Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Brand Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Customer Experience Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Digital Advertising Strategy</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Research</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Customer Journey Map</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Mystery Shopper</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Benchmarketing</p>
                                            </li>
                                            <li>
                                                <p className="font_8">360 (SWOT)</p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-j9ples3e" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-j9ples3e" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Design</h2></div><div id="comp-l7f6x23o__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8">Brand Identity</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Naming</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Packaging</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Menus</p>
                                            </li>
                                            <li>
                                                <p className="font_8">Web Design</p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-k67jq4md" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-k67jq4md" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Marketing</h2></div><div id="comp-l7f6x23o__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Consulting</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Development</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Media Planning</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Copywriting</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Social Media Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>SEO / SEM</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Paid Advertising</span></p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-l7f75lkn" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f75lkn" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Content Creation</span></h2></div><div id="comp-l7f6x23o__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Photo &amp; Video Production</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Drone Content</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Film Content</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Styling</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Art Direction</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Post - Production</span></p>
                                            </li>
                                        </ul></div></div></div><div id="comp-l7f6x23g__item-l7f77lx4" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f77lx4" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Influencer Marketing</h2></div><div id="comp-l7f6x23o__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
                                            <li>
                                                <p className="font_8"><span>Content Strategy</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8">Influencer matchmaking</p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Campaign Management</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Social Media Advertising</span></p>
                                            </li>
                                            <li>
                                                <p className="font_8"><span>Production and Content Creation</span></p>
                                            </li>
                                        </ul></div></div></div></div>
                    </div>
                </section>
            </div>

            {/* Add Our Work Container
            Add text container
            Add graphic container
            Add graphic */}
            {/* Remove this section below here because it will be replaced with footer module */}
            <div classNameName="contact-form-container">
                <ContactForm />
            </div>
        </div>
    )



    //     return (
    //         <main id="home_page_container" className="page_container">
    //             <div id="our_work_container" className="work_container">
    //                 <section id="our_work_content" className="work_content" data-testid="section-container">
    //                     <div id="work_text_container" className="work_text" data-testid="richTextElement" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
    //                         <h1 className="font_5"><span style={{fontWeight: "400"}}>Explore our work</span></h1>
    //                     </div>
    //                     <div className="work_graphic_container" id="work_graphic_container" aria-disabled="false" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
    //                         <a data-testid="linkElement" href="https://www.thekiterises.com/ourwork" target="_self" className="_3wqEk" aria-disabled="false"><span className="_1Qnnq">Explore</span></a>
    //                     </div>
    //                 </section>
    //             </div>
    //             <section id="full_service" className="_3uJnK full_service_container undefined" data-testid="section-container">
    //                 <div id="bgLayers_full_service" data-hook="bgLayers" className="_3wnIc">
    //                     <div data-testid="colorUnderlay" className="_3KzuS _3SQN-"></div>
    //                     <div id="bgMedia_full_service" className="_2GUhU"></div>
    //                 </div>
    //                 <div id="service_pic" data-testid="imageX" className="_1x22G">
    //                     <style data-testid="scrollEffectStyle"></style>
    //                     <wix-image id="img-service_pic" data-image-info="{&quot;containerId&quot;:&quot;service_pic&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg&quot;,&quot;width&quot;:2002,&quot;height&quot;:2002,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Creativestudio_edited.jpg&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_466,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg">
    //                         <picture>
    //                             <img src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_466,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg" alt="" style={{objectFit: "cover", objectPosition: "50% 50%", width: "100%"}} />
    //                         </picture>
    //                     </wix-image>
    //                 </div>
    //                 <div id="full_service_text" className="_1Q9if _3bcaz" data-testid="richTextElement">
    //                     <h2 className="font_2"><span><span style={{fontWeight:"normal"}}>WE ARE A</span></span></h2>
    //                     <h2 className="font_2"><span><span style={{fontWeight:"normal"}}><span className="backcolor_16">FULL-SERVICE</span></span></span></h2>
    //                     <h2 className="font_2"><span><span style={{fontWeight:"normal"}}>AGENCY</span></span></h2></div>
    //             </section>
    //             <section id="copyright" className="_3uJnK copyright-container undefined" data-testid="section-container">
    //                 <div id="bgLayers_copyright" data-hook="bgLayers" className="_3wnIc"><div data-testid="colorUnderlay" className="_3KzuS _3SQN-">
    //                 </div>
    //                     <div id="bgMedia_copyright" className="_2GUhU"></div></div><div id="comp-l2lk0o9u" className="_3Fes4 comp-l2lk0o9u-container">
    //                     <div className="_2l-6d">
    //                     </div>
    //                     <div id="copyright_links_container" className="_3WZb8">
    //                         <ul className="_2upBq" aria-label="Social Bar">
    //                             <li id="dataItem-l2lk0oa3-comp-l2lk0oa1" className="_2lHsw"><a data-testid="linkElement" href="https://www.facebook.com/thekiterises" target="_blank" rel="noreferrer noopener" className="_2MTXI">
    //                                 <wix-image id="img_0_comp-l2lk0oa1" className="_1-6YJ t7wUO" data-image-info="{&quot;containerId&quot;:&quot;dataItem-l2lk0oa3-comp-l2lk0oa1&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;23fd2a2be53141ed810f4d3dcdcd01fa.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png">
    //                                     <img alt="Facebook" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" style={{width: "30px", height: "30px", objectFit: "cover"}} />
    //                                 </wix-image>
    //                             </a>
    //                             </li>
    //                             <li id="dataItem-l2lk0oa32-comp-l2lk0oa1" className="_2lHsw"><a data-testid="linkElement" href="https://www.instagram.com/thekiterises/" target="_blank" rel="noreferrer noopener" className="_2MTXI">
    //                                 <wix-image id="img_1_comp-l2lk0oa1" className="_1-6YJ t7wUO" data-image-info="{&quot;containerId&quot;:&quot;dataItem-l2lk0oa32-comp-l2lk0oa1&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;81af6121f84c41a5b4391d7d37fce12a.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png">
    //                                     <img alt="Instagram" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" style={{width: "30px", height: "30px", objectFit: "cover"}} />
    //                                 </wix-image>
    //                             </a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                     <div id="copyright_text_container" className="_3Fes4 comp-l2lk0oa9-container">
    //                         <div className="_2l-6d"></div>
    //                         <div id="comp-l2lk0oae" className="_1Q9if _3bcaz" data-testid="richTextElement"><p className="font_7">
    //                             <span><span style={{textDecoration:"underline"}}><a href="https://www.thekiterises.com/privicypolicy" target="_self">Privacy policy</a></span></span></p></div>
    //                         <div id="comp-l2lk0oam" className="_1Q9if _3bcaz" data-testid="richTextElement">
    //                             <p className="font_8">Copyright © The Kite Rises 2022&nbsp;| All Rights Reserved.</p>
    //                         </div></div></div>
    //             </section>
    //             <section id="welcome_message" className="_3uJnK welcome_message-container undefined" data-testid="section-container">
    //                 <div id="bgLayers_welcome_message" data-hook="bgLayers" className="_3wnIc">
    //                     <div data-testid="colorUnderlay" className="_3KzuS _3SQN-"></div>
    //                     <div id="bgMedia_welcome_message" className="_2GUhU"></div>
    //                 </div>
    //                 <div id="comp-l4wldeva" className="FFg4y"><wix-iframe data-src=""><div className="_1WP0F"><iframe className="_3Xz9Z" title="Embedded Content" name="htmlComp-iframe" width="100%" height="100%" data-src="" src="https://www-thekiterises-com.filesusr.com/html/de57db_c4400932a03cd15bdd1d94edf579ab9f.html"></iframe></div></wix-iframe></div><div id="comp-l4zuust8" data-testid="imageX" className="_1x22G"><style data-testid="scrollEffectStyle"></style>
    //                     <wix-image id="img-comp-l4zuust8" data-image-info="{&quot;containerId&quot;:&quot;comp-l4zuust8&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png&quot;,&quot;width&quot;:3130,&quot;height&quot;:1194,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Logo TKR.png&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png/v1/fill/w_194,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20TKR.png">
    //                         <picture><img src="https://static.wixstatic.com/media/d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png/v1/fill/w_194,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20TKR.png" alt="" style={{objectFit: "cover", objectPosition: "50% 50%", width: "100%"}} /></picture></wix-image></div>
    //             </section>
    //             <section id="services_list" className="_3uJnK services_list-container undefined" data-testid="section-container">
    //                 <div id="bgLayers_services_list" data-hook="bgLayers" className="_3wnIc">
    //                     <div data-testid="colorUnderlay" className="_3KzuS _3SQN-"></div>
    //                     <div id="bgMedia_services_list" className="_2GUhU"></div></div>
    //                 <div id="comp-l7f6x239" className="_38Oww" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
    //                     <div className="comp-l7f6x239-container" data-testid="responsive-container-content" role="list">
    //                         <div id="comp-l7f6x23g__item1" role="listitem" className="_3Fes4 comp-l7f6x23g-container">
    //                             <div className="_2l-6d"></div>
    //                             <div id="comp-l7f6x23j__item1" className="_3Fes4 comp-l7f6x23j-container">
    //                                 <div className="_2l-6d"></div>
    //                                 <div id="comp-l7f6x23l__item1" className="_1Q9if _3bcaz" data-testid="richTextElement">
    //                                     <h2 className="font_2"><span>Digital Strategy</span></h2>
    //                                 </div>
    //                                 <div id="comp-l7f6x23o__item1" className="_1Q9if _3bcaz" data-testid="richTextElement">
    //                                     <ul className="font_8" style={{textAlign:"left"}}>
    //                                         <li>
    //                                             <p className="font_8">Content Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Growth Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Brand Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Customer Experience Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Digital Advertising Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Research</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Customer Journey Map</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Mystery Shopper</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Benchmarketing</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">360 (SWOT)</p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-j9ples3e" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-j9ples3e" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Design</h2></div><div id="comp-l7f6x23o__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8">Brand Identity</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Naming</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Packaging</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Menus</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Web Design</p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-k67jq4md" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-k67jq4md" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Marketing</h2></div><div id="comp-l7f6x23o__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Consulting</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Development</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Media Planning</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Copywriting</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Social Media Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>SEO / SEM</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Paid Advertising</span></p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-l7f75lkn" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f75lkn" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Content Creation</span></h2></div><div id="comp-l7f6x23o__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Photo &amp; Video Production</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Drone Content</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Film Content</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Styling</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Art Direction</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Post - Production</span></p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-l7f77lx4" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f77lx4" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Influencer Marketing</h2></div><div id="comp-l7f6x23o__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Content Strategy</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Influencer matchmaking</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Social Media Advertising</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Production and Content Creation</span></p>
    //                                         </li>
    //                                     </ul></div></div></div></div><div className="comp-l7f6x239-container" data-testid="responsive-container-content" role="list"><div id="comp-l7f6x23g__item1" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item1" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item1" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Digital Strategy</span></h2></div><div id="comp-l7f6x23o__item1" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8" style={{textAlign:"left"}}>
    //                                         <li>
    //                                             <p className="font_8">Content Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Growth Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Brand Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Customer Experience Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Digital Advertising Strategy</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Research</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Customer Journey Map</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Mystery Shopper</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Benchmarketing</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">360 (SWOT)</p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-j9ples3e" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-j9ples3e" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Design</h2></div><div id="comp-l7f6x23o__item-j9ples3e" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8">Brand Identity</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Naming</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Packaging</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Menus</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Web Design</p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-k67jq4md" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-k67jq4md" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Marketing</h2></div><div id="comp-l7f6x23o__item-k67jq4md" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Consulting</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Development</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Media Planning</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Copywriting</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Social Media Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>SEO / SEM</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Paid Advertising</span></p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-l7f75lkn" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f75lkn" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2"><span>Content Creation</span></h2></div><div id="comp-l7f6x23o__item-l7f75lkn" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Photo &amp; Video Production</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Drone Content</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Film Content</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Styling</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Art Direction</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Post - Production</span></p>
    //                                         </li>
    //                                     </ul></div></div></div><div id="comp-l7f6x23g__item-l7f77lx4" role="listitem" className="_3Fes4 comp-l7f6x23g-container"><div className="_2l-6d"></div><div id="comp-l7f6x23j__item-l7f77lx4" className="_3Fes4 comp-l7f6x23j-container"><div className="_2l-6d"></div><div id="comp-l7f6x23l__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><h2 className="font_2">Influencer Marketing</h2></div><div id="comp-l7f6x23o__item-l7f77lx4" className="_1Q9if _3bcaz" data-testid="richTextElement"><ul className="font_8">
    //                                         <li>
    //                                             <p className="font_8"><span>Content Strategy</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8">Influencer matchmaking</p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Campaign Management</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Social Media Advertising</span></p>
    //                                         </li>
    //                                         <li>
    //                                             <p className="font_8"><span>Production and Content Creation</span></p>
    //                                         </li>
    //                                         </ul></div></div></div></div>
    //                 </div>
    //             </section>
    //         </main>
    //     )
}

export default Home
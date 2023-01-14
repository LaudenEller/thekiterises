// This module will display the home page including:
// welcome animation
// description section
// services section

import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm"
import Description from "../components/Description"
import Footer from "../components/Footer"
import OurWork from "../components/OurWork"
import Services from "../components/Services"
import WelcomeBanner from "../components/WelcomeBanner"
import "./Home.css"
// import SiteContainer from "./SiteContainer"


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

    // return (
    //     <SiteContainer />
    // )

    return (
        // parent container for this page's content that's sandwiched between the navbar and the footer 
        <div className="home">
            {/* fetched data that will be removed from this page */}
            <div className="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div>
            {/* animation container */}
            {/* HELP: the banner is sizing correctly: it's too tall
                It may be solved once the other elements in the HTML are resized */}
            {/* <section className='welcome-animation-container'>
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
            </section> */}

            <section className="welcomeBanner">
                <WelcomeBanner />
            </section>

            {/* Services container */}
            <section className="services1-container">
                <Services />
            </section>


            {/* description container */}
            {/* Add Description container
            Add image container
            Add text container
                Add background highlight to "FULL-SERVICE" matching background color of next section
             */}
            {/* <section id="comp-l7kn4r24" className="_3uJnK comp-l7kn4r24-container undefined" data-testid="section-container">
                <div id="bgLayers_comp-l7kn4r24" data-hook="bgLayers" className="_3wnIc">
                    <div data-testid="colorUnderlay" className="_3KzuS _3SQN-"></div>
                    <div id="bgMedia_comp-l7kn4r24" className="_2GUhU"></div></div>
                    <div id="comp-l7kn5ae1" className="_1Q9if _3bcaz" data-testid="richTextElement" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
                        <h2 className="font_2"><span><span style={{fontWeight: "normal"}}>WE ARE A</span></span></h2>

<h2 className="font_2"><span><span style={{fontWeight:"normal"}}><span className="backcolor_16">FULL-SERVICE</span></span></span></h2>

<h2 className="font_2"><span><span style={{fontWeight:"normal"}}>AGENCY</span></span></h2>
</div>
<div id="comp-l7knuxuv" data-testid="imageX" className="_1x22G">
<wix-image id="img-comp-l7knuxuv" data-image-info="{&quot;containerId&quot;:&quot;comp-l7knuxuv&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[{&quot;displayMode&quot;:&quot;fill&quot;,&quot;scrollEffect&quot;:&quot;none&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 320px) and (max-width: 1680px)&quot;}],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg&quot;,&quot;width&quot;:1688,&quot;height&quot;:1688,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Portland_creative_agency._.jpg&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;focalPoint&quot;:{&quot;x&quot;:57,&quot;y&quot;:46},&quot;scrollEffect&quot;:&quot;none&quot;}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_172,h_172,fp_0.57_0.46,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg">
<picture>
<source media="(min-width: 320px) and (max-width: 1680px)" srcset="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg" data-srcset="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg"/>
<img src="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_172,h_172,fp_0.57_0.46,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg" alt="" style={{objectFit: "cover", objectPosition: "57% 46%", width: "100%"}}/>
    </picture></wix-image></div>
<div id="comp-l7knxrj8" data-testid="imageX" className="_1x22G">
    <wix-image id="img-comp-l7knxrj8" data-image-info="{&quot;containerId&quot;:&quot;comp-l7knxrj8&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg&quot;,&quot;width&quot;:2002,&quot;height&quot;:2002,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Portland_creative_agency_edited.jpg&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg/v1/fill/w_180,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency_edited.jpg">
        <picture>
            <img src="https://static.wixstatic.com/media/d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg/v1/fill/w_180,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency_edited.jpg" alt="" style={{objectFit: "cover", objectPosition: "50% 50%", width: "100%"}}/>
                </picture></wix-image></div>
                <div id="comp-l7ko0fai" data-testid="imageX" className="_1x22G" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
                    <wix-image id="img-comp-l7ko0fai" data-image-info="{&quot;containerId&quot;:&quot;comp-l7ko0fai&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg&quot;,&quot;width&quot;:2002,&quot;height&quot;:2002,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Creativestudio_edited.jpg&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_4,h_4,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg">
                        <picture>
                            <img src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_4,h_4,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg" alt="" style={{objectFit: "cover", objectPosition: "50% 50%", width: "100%"}}/>
                            </picture></wix-image></div>
                            </section> */}

            <section className="description-container">
                <Description />
                <OurWork />

            </section>


            {/* Add Services container with background "color rgb(var(--color_16))"
            Add five service list containers
            Add five uls */}
            {/* services container */}
            {/* <section className="services-container">
                        <div className="services-box">
                                    <div className="services-box-title">
                                        <h2 className="services-title">Digital Strategy</h2>
                                    </div>
                                    <div className="services-box-content">
                                        <ul className="--font_8" style={{ textAlign: "left" }}>
                                            <li className="services-list-item">
                                                <p className="--font_8">Content Strategy</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Growth Strategy</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Brand Strategy</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Customer Experience Strategy</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Digital Advertising Strategy</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Research</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Customer Journey Map</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Mystery Shopper</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">Benchmarketing</p>
                                            </li>
                                            <li className="services-list-item">
                                                <p className="--font_8">360 (SWOT)</p>
                                            </li>
                                        </ul></div></div>
                        <div className="services-box">
                                <div className="services-box-title">
                                    <h2 className="font_2">Design</h2></div>
                                    <div className="services-box-content">
                                        <ul className="font_8">
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
                                        </ul></div></div>
                        <div className="services-box">
                        <div className="services-box-title">
                                                    <h2 className="font_2">Marketing</h2></div>
                                                    <div className="services-box-content">
                                                        <ul className="font_8">
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
                                        </ul></div></div>
                        <div className="services-box">
                        <div className="services-box-title">
                                                    <h2 className="font_2"><span>Content Creation</span></h2>
                                                    </div>
                                                    <div className="services-box-content">
                                                        <ul className="font_8">
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
                                        </ul></div></div>
                        <div className="services-box">
                        <div className="services-box-title">
                            <h2 className="font_2">Influencer Marketing</h2></div>
                                                    <div className="services-box-content">
                                                        <ul className="font_8">
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
                                        </ul></div></div>
            </section> */}

            {/* Add Our Work Container
            Add text container
            Add graphic container
            Add graphic */}
            {/* <div className="work-container">
                <OurWork />
            </div> */}
            {/* Remove this section below here because it will be replaced with footer module */}
            <div className="contact-form-container">
                <ContactForm />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div >
    )
}

export default Home
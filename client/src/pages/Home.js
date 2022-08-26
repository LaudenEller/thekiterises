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
        <div className="home">
            {/* fetched data that will be removed from this page */}
            <div className="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div>
            {/* animation container */}
            <section class='welcome-animation-container'>
        <div class='masthead-image' id='master-container'>
            <div class='content center'>
                <h1 id='master'>
                  <div>Hello</div>
                  <div id='master-container-scroller'>
                    <div class='master-container-scroller_item'>
                      <a class='cta-link' href='#'>Friend</a>.
                    </div>
                    <div class='master-container-scroller_item'>
                      <a class='cta-link' href='#'>Partner.</a>
                    </div>
                    <div class='master-container-scroller_item'>
                        <a class='cta-link' href='#'>Friend</a>.
                    </div>
                  </div>
                  <div>Let's grow together!</div>
                </h1>
            </div>
        </div>
    </section>
    {/* description container */}
    <div className="description-container">
        <p>Founded in Jalisco, Mexico. and based in Portland, Oregon. The kite rises is a full-service creative agency that specializes in social media management, strategy planning, digital business growth, content creation, web design, and marketing with influencers.</p>
    </div>
    {/* services container */}
    <div className="services-banner-container">
        <p>OUR SERVICES</p>
    </div>
    <div className="services-list-container">
        <div className="left-services-column"></div>
        <div className="middle-services-column"></div>
        <div className="right-services-column"></div>
    </div>
    <div className="work-example-container">
        <div className="work-example-title"></div>
        <img className="work-example-graphic"></img>
    </div>
    {/* Remove this section below here because it will be replaced with footer module */}
    <div className="contact-form-container">
        <ContactForm />
        </div>
        </div>
    )
}

export default Home
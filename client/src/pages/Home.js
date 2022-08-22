import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm"
import "./Home.css"

const Home = () => {
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
        <div className="home">
            <div className="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div>
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
    <div className="description-container">
        <p>Founded in Jalisco, Mexico. and based in Portland, Oregon. The kite rises is a full-service creative agency that specializes in social media management, strategy planning, digital business growth, content creation, web design, and marketing with influencers.</p>
    </div>
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
    <div className="contact-form-container">
        <ContactForm />
        </div>
        </div>
    )
}

export default Home
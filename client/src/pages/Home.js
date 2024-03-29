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

    return (
        // parent container for this page's content that's sandwiched between the navbar and the footer 
        <div className="home">
            {/* fetched data that will be removed from this page */}
            <div className="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div>

            <section className="welcomeBanner">
                <WelcomeBanner />
            </section>

 {/* Add Services container with background "color rgb(var(--color_16))"
            Add five service list containers
            Add five uls */}
            {/* services container */}
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
            <section className="description-container">
                <Description />
            </section>

            {/* Add Our Work Container
            Add text container
            Add graphic container
        Add graphic */}
            {/* <div className="work-container">
                <OurWork />
            </div> */}

            <section className="ourwork-container">
            <OurWork />
            </section>

           
            {/* Remove this section below here because it will be replaced with footer module */}
            <div className="contact-form-container">
                <ContactForm />
            </div>
            {/* <div className="footer-container">
                <Footer />
            </div> */}
        </div >
    )
}

export default Home
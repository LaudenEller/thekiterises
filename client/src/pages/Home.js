// This module will display the home page including:
// welcome animation
// description section
// services section

import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm"
import Description from "../components/Description"
import Footer from "../components/Footer"
import MysterySvg from "../components/MysterySvg"
import { Backdrop } from "../components/nav/backdrop/Backdrop"
import { NavBar } from "../components/nav/NavBar1"
import SideDrawer from "../components/nav/SideDrawer"
import OurWork from "../components/OurWork"
import Services from "../components/Services"
import WelcomeBanner from "../components/WelcomeBanner"
import "./Home.css"
import "../components/nav/NavBar.css"
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

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    const DrawerTogglerHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    const BackdropClickHandler = () => {
        setSideDrawerOpen(false)
    }

    let backdrop = null

    if (sideDrawerOpen === true) {
        backdrop = <Backdrop click={BackdropClickHandler} />
    }

    return (

        <div id="home_page" className={"home_page page_bg"}>
            <div className='page_bg-home_page'></div>
            <div>
                <div className='home_page-container'>
                    <header id="navbar-header" className='navbar-header navbar-header-container'>
                        {/* insert nav, footer and page content components */}
                        <NavBar drawerClickHandler={DrawerTogglerHandler} />
                        <SideDrawer show={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen} />
                        {backdrop}
                    </header>
                    <main id="page_sections-home" className="display_contents">
                        {/* fetched data that will be removed from this page */}
                        {/* <div className="workSamples">
                {worksamples && worksamples.map((worksample) => (
                    <p key={worksample._id}>{worksample.clientName}</p>
                ))}
            </div> */}
                        <WelcomeBanner />
                        <Services />
                        <Description />
                        <OurWork />
                        <Footer />
                    </main>
                    <footer>
                    {/* Remove this section below here because it will be replaced with footer module */}
                    <ContactForm />
                    </footer>
                    <MysterySvg />
                </div>
            </div>
        </div>
    )
}

export default Home
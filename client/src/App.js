// TODO: The Navbar, Sidedrawer and Backdrop work together to change the standard nav bar at the top of every page to 
// the dropped down version where the background of whatever page you are on is blurred out and the new navbar appears 
// with all the links and the window animation

// This component will export a function that accepts the current users account credentials as an argument 
    // and returns the background layers, navbar, pages div that displays the appropriate page and the footer

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Backdrop } from './components/nav/backdrop/Backdrop';
import SideDrawer from './components/nav/SideDrawer';
import { NavBar } from './components/nav/NavBar1';
import Home from './pages/Home';
import "@fontsource/barlow"
import './index.css';
import './fonts/lulo-clean-w01-one-bold.ttf'
import Home1 from './pages/Home1';
import Footer from './components/Footer';

function App() {
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
    // <>

    // Q: this is a bad class name, isn't this where the first overriding css rules will begin,
          // above the HTML elements that are actually rendered to the DOM?
    <div className="App">
      <BrowserRouter>
        <NavBar drawerClickHandler={DrawerTogglerHandler} />
        <SideDrawer show={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen} />
        {backdrop}
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    // </>
  );
}

export default App
// TODO: The Navbar, Sidedrawer and Backdrop work together to change the standard nav bar at the top of every page to 
  // the dropped down version where the background of whatever page you are on is blurred out and the new navbar appears 
  // with all the links and the window animation

// This module will return the navbar, the desired page through the ApplicationViews module, and the footer

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';

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
    <div className="App">
      <BrowserRouter>
      <Navbar drawerClickHandler={DrawerTogglerHandler}/>
      <SideDrawer show={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} sideDrawerOpen={sideDrawerOpen} />
                {backdrop}
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

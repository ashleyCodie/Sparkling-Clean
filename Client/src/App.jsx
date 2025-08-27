
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Packages from "./components/Packages/Packages"
import Photos from "./components/Photos/Photos"
import Services from "./components/Services/Services"
import Team from "./components/Team/Team"
import Navbar from "./components/Navbar/Navbar"
import glitter from "./assets/images/glitter.jpg"
import "./App.css"


const App = () => {
  const [showNav, setShowNav] = useState(false)


  return (
    <div>

       {/* <!-- Navbar on smaller screens--> */}
      {!showNav && <button onClick={() => { setShowNav(true) }} className="w3-button  w3-display-topleft w3-hover-white w3-hide-large" style={{ width: "100%", fontSize: "32px", color: "white", zIndex: "100" }}><b><i>☰ Open Menu</i></b></button>}

      {showNav && <div className="w3-sidebar w3-purple w3-top w3-large w3-padding w3-hide-large" style={{ zIndex: "100000", width: "300px", fontWeight: "bold", position: "absolute"}} id="mySidebar"><br />
        <a onClick={() => setShowNav(false)} className="w3-button w3-hide-large w3-display-topleft" style={{ width: "100%" }}><b><i>Close Menu</i></b></a>
        <div className="w3-container">
          <h3 className="w3-padding-64"><b><i>Sparkling<br />Clean</i></b></h3>
        </div>
        <div className="w3-bar-block">
          <a href="./" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>Home</i></b></a>
          <a href="./Packages" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>Packages</i></b></a>
          <a href="./Photos" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>Photos</i></b></a>
          <a href="./Services" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>Services</i></b></a>
          <a href="./Team" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>The Team</i></b></a>
          <a href="./Contact" onClick={() => setShowNav(false)} className="w3-bar-item w3-button w3-hover-white"><b><i>Contact</i></b></a>
        </div>
      </div>}

{/*<!-- Overlay effect when opening sidebar on small screens --> */}
      <div className="w3-overlay w3-hide-large" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>

      {/* <!-- !PAGE CONTENT! --> */}
      <div className="w3-main" style={{ marginLeft: "340px", marginRight: "40px" }}>
      </div>

      <div className="main">
        <div className="w3-display-container">
          <img className="image" src={glitter} style={{ width: "100%", height: "2%", marginBottom: "60px" }} alt="glitter" />
          <div>
          </div>
          <h1 className="w3-display-topmiddle w3-container w3-text-white glow w3-hide-small w3-hide-medium"><b><i><i className="bi bi-stars"></i>Sparkling Clean<i className="bi bi-stars"></i></i></b></h1>
          <h1 className="w3-display-middle w3-jumbo w3-text-white glow w3-hide-small w3-hide-medium"><b><i><i className="bi bi-stars"></i>Cleaning Services<i className="bi bi-stars"></i></i></b></h1>
          <h1 className="w3-display-bottommiddle w3-container w3-xxlarge w3-text-white glow w3-hide-small w3-hide-medium"><b><i><i className="bi bi-stars"></i>"We Will Leave Your Home Sparkling Clean!"<i className="bi bi-stars"></i></i></b></h1>
        </div>

         {/* <!-- Routes to each page on website --> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Packages" element={<Packages />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Team" element={<Team />} />
          </Routes>
        </Router>
        <footer className="footer">
          <p className="footer"><b><i>Sparkling Clean Home Cleaning Services</i></b></p>
          <p className="footer"><b><i>12345 S. Gilbert Rd, Gilbert, Arizona</i></b></p>
          <p className="footer"><b><i>Phone: 480-222-2222</i></b></p>
          <p className="footer"><b><i>Email: sparklingclean@gmail.com</i></b></p>
        </footer>
      </div>
    </div>
  )
}
export default App;



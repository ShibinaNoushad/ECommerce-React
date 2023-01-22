import React from "react";
import AboutNavbar from "../About/AboutNavbar";
import HomeHeader from "./HomeHeader";
import "./Home.css";
import Footer from "../../Components/Store/Footer/Footer";

function Home() {
  // console.log("home");
  return (
    <div>
      <AboutNavbar></AboutNavbar>
      <HomeHeader></HomeHeader>
      <div className="homeBody">
        <h4 className="textt">TOURS</h4>
        <div className="packages">
          <span className="date">JUL 16</span>
          <span className="place">DETROIT, MI</span>
          <span className="spec">DTE ENERGY MUSIC THEATRE</span>
          <button className="bton">BUY TICKETS</button>
        </div>
        <div className="packages">
          <span className="date"> JUL 19</span>
          <span className="place">TORONTO,ON</span>
          <span className="spec">BUDWEISER STAGE</span>
          <button className="bton">BUY TICKETS</button>
        </div>
        <div className="packages">
          <span className="date">JUL 22</span>
          <span className="place">BRISTOW, VA</span>
          <span className="spec"> JIGGY LUBE LIVE</span>
          <button className="bton">BUY TICKETS</button>
        </div>
        <div className="packages">
          <span className="date">JUL 29</span>
          <span className="place">PHOENIX, AZ</span>
          <span className="spec">AK-CHIN PAVILION</span>
          <button className="bton">BUY TICKETS</button>
        </div>
        <div className="packages">
          <span className="date">AUG 2</span>
          <span className="place">LAS VEGAS, NV</span>
          <span className="spec"> T-MOBILE ARENA</span>
          <button className="bton">BUY TICKETS</button>
        </div>
        <div className="packages">
          <span className="date">AUG 7</span>
          <span className="place">CONCORD, CA</span>
          <span className="spec">CONCORD PAVILION</span>
          <button className="bton">BUY TICKETS</button>
        </div>
      </div>
      <br></br>
      <br/>
      <Footer></Footer>
    </div>
  );
}

export default Home;

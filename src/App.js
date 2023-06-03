import "./App.css";
import logodark from "./assets/logo-dark.svg";
import logolight from "./assets/logo-light.svg";
import heromobile from "./assets/image-hero-mobile.png";
import herotablet from "./assets/image-hero-tablet@2x.png";
import herodesktop from "./assets/image-hero-desktop.png"

import iconanimation from "./assets/icon-animation.svg";
import iconandesign from "./assets/icon-design.svg";
import iconanphoto from "./assets/icon-photography.svg";
import iconancrypto from "./assets/icon-crypto.svg";
import iconanbusiness from "./assets/icon-business.svg";
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <nav className="nav-bar">
          <img className="logo" src={logodark}></img>
          <button className="header-btn">Get Started</button>
        </nav>
        <div className="hero">
          <div className="hero-main">
            <h1>Maximize skill, minimize budget</h1>
            <p>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <button className="hero-btn">Get Started</button>
            </div>
            <img className="hero-img" src={heromobile}></img>
            <img className="hero-img-tablet" src={herotablet}></img>
            <img className="hero-img-desktop" src={herodesktop}></img>
          
        </div>
      </header>
      <div className="container">
        <div className="gradient-card">
          <p>Check out our most popular courses!</p>
        </div>
        <div className="cards animation">
          <img className="icons" src={iconanimation}></img>
          <div className="card">
            <h4>Animation </h4>
            <p>
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="cards design">
          <img className="icons" src={iconandesign}></img>
          <div className="card">
            <h4>Design </h4>
            <p>
            Create beautiful, usable interfaces to help shape the future of 
            how the web looks.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="cards photo">
          <img className="icons" src={iconanphoto}></img>
          <div className="card">
            <h4>Photography </h4>
            <p>
            Explore critical fundamentals like lighting, composition, and focus 
            to capture exceptional photos.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="cards crypto">
          <img className="icons" src={iconancrypto}></img>
          <div className="card">
            <h4>Crypto </h4>
            <p>
            All you need to know to get started investing in crypto. Go from beginner 
            to advanced with this 54 hour course.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="cards business">
          <img className="icons" src={iconanbusiness}></img>
          <div className="card">
            <h4>Business </h4>
            <p>
            A step-by-step playbook to help you start, scale, and sustain your business 
            without outside investment.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <img className="footer-logo" src={logolight}></img>
        <button className="footer-btn">Get Started</button>
      </footer>
    </div>
  );
}

export default App;

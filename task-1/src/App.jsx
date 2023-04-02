import "./App.css";
import logo from "./img/react-2.svg";
import settings from "./img/gear-solid.svg";
import fb from "./img/facebook.svg";
import insta from "./img/instagram.svg";
import github from "./img/github.svg";
import linked from "./img/linkedin.svg";
import phone from "./img/phone-solid.svg";
import mail from "./img/envelope-solid.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={logo}></img>
        <div className="">
          <ul className="listItems">
            <li className="listItem">
              <a href="/">Home</a>
            </li>
            <li className="listItem">
              <a href="/">Contact Us</a>
            </li>
            <li className="listItem">
              <a href="/">About</a>
            </li>
            <li className="listItem">
              <a href="/">Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="settingContainer">
          <img
            className="settings"
            style={{ width: "20px" }}
            src={settings}
          ></img>
        </div>
      </header>
      <div className="mainContent">
        <div className="contactIconsContainer">
          <div className="contactIcons">
            <img src={mail} style={{ width: "20px" }} />
            <img src={phone} style={{ width: "20px" }} />
          </div>
        </div>
        <form action="" className="contactForm">
          <div className="inputs">
            <input placeholder="Enter Your Name" type="text" />
            <input placeholder="Enter Your Email" type="text" />
          </div>
          <div className="txtSubmit">
            <textarea
              placeholder="Enter Your Message Here...."
              id="txtArea"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" id="submitBtn">
              Submit
            </button>
          </div>
        </form>
        <div className="bground"></div>
      </div>
      <footer>
        <div className="links">
          <div>
            <h3>Go To</h3>
            <ul>
              <li>home</li>
              <li>contat us</li>
              <li>about us</li>
              <li>portfolio</li>
            </ul>
          </div>
          <div>
            <h3>Our Recent Work</h3>
            <ul>
              <li>marine warehouse</li>
              <li>Acree Real Estate</li>
              <li>Deco build</li>
              <li>Euro Concept</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>Mail</li>
              <li>Telephone</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>
        <div className="quickLinks">
          <div className="icons">
            <img src={insta} style={{ width: "15px" }} />
            <img src={linked} style={{ width: "15px" }} />
            <img src={mail} style={{ width: "15px" }} />
            <img src={phone} style={{ width: "15px" }} />
            <img src={github} style={{ width: "15px" }} />
            <img src={fb} style={{ width: "15px" }} />
          </div>
          <div className="company">
            <i> Alpha Cyber</i>
          </div>
          <div className="learnMore">learn more</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

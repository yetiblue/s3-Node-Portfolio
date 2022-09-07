import "./HomeVideo.css";
import HomeSketch from "./HomeSketch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

function HomeVideo() {
  return (
    <div className="home-content">
      {/* <div className="videoContainer"> */}
      {/* </div> */}
      <div className="header__site-title-home">
        <h1 className="home__name">Timmy Zhou</h1>
      </div>
      <HomeSketch></HomeSketch>

      <ul className="bottom-nav">
        <li className="bottom-nav__link">
          <Link className="bottom-nav__link" to="/about">
            About
          </Link>
        </li>
        <li className="bottom-nav__link">
          <Link className="bottom-nav__link" to="/generative">
            Generative{" "}
          </Link>
        </li>
        <li className="bottom-nav__link">
          <Link className="bottom-nav__link" to="/photography">
            Photography
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default HomeVideo;

import "./HomeVideo.css";
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
      <video className="home-video" autoPlay muted loop>
        <source
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/videos/background2.mov"
          type="video/mp4"
        ></source>
      </video>
      {/* </div> */}
      <div className="header__site-title-home">
        <h1 className="home__name">Timmy Zhou</h1>
      </div>
      <ul className="bottom-nav">
        <li className="bottom-nav__link">
          <Link className="bottom-nav__link__first" to="/about">
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

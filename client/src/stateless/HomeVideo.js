import "./HomeVideo.css";
function HomeVideo() {
  return (
    <div>
      {/* <Link
              className="logo_nav"
              style={{ textDecoration: "none", color: "black" }}
              to="/"
          > */}

      {/* </Link> */}

      <video autoPlay muted loop>
        <source
          className="home-video"
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/videos/background2.mov"
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
      <div className="header__site-title-home">
        <h1>Timmy Zhou</h1>
      </div>
      <ul className="bottom-nav">
        <li className="bottom-nav__link">About</li>
        <li className="bottom-nav__link">Generative</li>
        <li className="bottom-nav__link">Photography</li>
      </ul>
    </div>
  );
}
export default HomeVideo;

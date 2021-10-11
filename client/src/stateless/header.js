// import logo from "./logo.svg";
import "./header.css";
import MetaTags from "react-meta-tags";

function Header() {
  return (
    <div className="wrapper">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <div className="header col-12">
        <div className="header__site-title">
          <h1>Timmy Zhou</h1>
        </div>
        <div className="hamburger">
          <button className="drawerBtn">☰ </button>
        </div>

        <div className="navbar">
          <ul className="navbar_list">
            <a className="navbar_link" href="">
              Home
            </a>

            <a className="navbar_link" href="">
              Blog
            </a>

            <a className="navbar_link" href="">
              About
            </a>
          </ul>
        </div>

        {/* <button className="openbtn">☰ Open Sidebar</button> */}
      </div>
    </div>
  );
}

export default Header;

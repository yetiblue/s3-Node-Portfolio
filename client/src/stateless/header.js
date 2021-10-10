// import logo from "./logo.svg";
import "./header.css";
import MetaTags from "react-meta-tags";

function Header() {
  return (
    <div className="wrapper">
      <MetaTags>
        {/* {" "} */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <div className="header col-mobile-12">
        <div className="col-6 col-mobile-6 header__site-title">
          <h1>Timmy Zhou</h1>
        </div>

        <nav className="navbar col-mobile-1">
          <ul className="navbar_list ">
            <li>
              <a className="navbar_link" href="">
                Home
              </a>
              <a className="navbar_link" href="">
                Blog
              </a>
              <a className="navbar_link" href="">
                About
              </a>
            </li>
          </ul>
        </nav>
        {/* <nav className="navbar">
          <ul className="navbar_list col-mobile-11">BOo</ul>
        </nav> */}
      </div>
    </div>
  );
}

export default Header;

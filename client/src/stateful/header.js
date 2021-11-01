import axios from "axios";
import "./header.css";
import MetaTags from "react-meta-tags";
import React from "react";
import About from "../stateless/About.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
// import SocialButtons from "../stateless/socialButtons.js";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { showSidebar: false };
  }
  async componentDidMount() {
    await axios.get(`http://localhost:4000/route1/`);
    let response = response.data;
    console.log("response");
  }
  async openSidebar() {
    await this.setState({ showSidebar: !this.state.showSidebar }); //setState makes a request and isn't instant

    if (this.state.showSidebar === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  render() {
    let sidebar = this.state.showSidebar ? "sidebar-show" : "sidebar";

    return (
      <div className="wrapper">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>

        <div className={sidebar}>
          {" "}
          <ul className="sidebar__ul">
            <li className="sidebar__li">
              <button
                onClick={this.openSidebar.bind(this)}
                className="sidebar__button"
              >
                X
              </button>
            </li>
            <li className="sidebar__li">
              {/* <a className="sidebar__link" href=""> */}
              <Link className="sidebar__link" to="/about">
                About
              </Link>
            </li>

            <li className="sidebar__li">
              <Link className="sidebar__link" to="/">
                Contact
              </Link>
            </li>
            <ul className="dropdown__hover" to="/work">
              Work ▾
              <li className="dropdown__li">
                <Link className="dropdown__item" to="/photography">
                  Photography
                </Link>
                <Link className="dropdown__item" to="/generative">
                  Generative Art
                </Link>
              </li>
            </ul>
          </ul>
        </div>

        <div className="header">
          <div className="header__site-title">
            <h1>Sample Text</h1>
          </div>
          <div className="hamburger">
            <button onClick={this.openSidebar.bind(this)} className="drawerBtn">
              ☰
            </button>
          </div>

          <div className="navbar">
            {/* something here is bumping out the page */}
            <ul className="navbar__list">
              <Link className="navbar__link" to="/about">
                About
              </Link>
              <ul className="dropdown">
                <ul className="dropdown__hover" to="/work">
                  Work ▾
                  <li className="dropdown__li">
                    <Link className="dropdown__item" to="/photography">
                      Photography
                    </Link>
                    <Link className="dropdown__item" to="/generative">
                      Generative Art
                    </Link>
                  </li>
                </ul>

                {/* <li className="dropdown__li"></li> */}
              </ul>
              <Link className="navbar__link" to="/">
                Contact
              </Link>
            </ul>
          </div>
          {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
            </Switch> */}
        </div>
      </div>
    );
  }
}

// function Header() {
//   return (
//     <div className="wrapper">
//       <MetaTags>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </MetaTags>
//       <div className="sidebar sidebar-show">
//         <ul className="sidebar__ul">
//           <li className="sidebar__li">
//             <button className="sidebar__button"> X</button>
//           </li>
//           <li className="sidebar__li">
//             <a className="sidebar__link" href="">
//               Home
//             </a>
//           </li>
//           <li className="sidebar__li">
//             <a className="sidebar__link" href="">
//               Blog
//             </a>
//           </li>
//           <li className="sidebar__li">
//             <a className="sidebar__link" href="">
//               About
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="header col-12">
//         <div className="header__site-title">
//           {/* <h1>Timmy Zhou</h1> */}
//           <h1>Sample Text</h1>
//         </div>
//         <div className="hamburger">
//           <button className="drawerBtn">☰ </button>
//         </div>

//         <div className="navbar">
//           <ul className="navbar__list">
//             <a className="navbar__link" href="">
//               Home
//             </a>

//             <a className="navbar__link" href="">
//               Blog
//             </a>

//             <a className="navbar__link" href="">
//               About
//             </a>
//           </ul>
//         </div>

//         {/* <button className="openbtn">☰ Open Sidebar</button> */}
//       </div>
//     </div>
//   );
// }

export default Header;

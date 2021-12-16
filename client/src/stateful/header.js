import "./header.css";
import MetaTags from "react-meta-tags";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { showSidebar: false };
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
              <Link className="sidebar__link" to="/about">
                About
              </Link>
            </li>

            <li className="sidebar__li">
              <Link className="sidebar__link" to="/contact">
                Contact
              </Link>
            </li>
            <ul className="dropdown__hover">
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
            <Link
              className="logo_nav"
              style={{ textDecoration: "none", color: "black" }}
              to="/"
            >
              <h1>Timmy Zhou</h1>
            </Link>
          </div>
          <div className="hamburger">
            <button onClick={this.openSidebar.bind(this)} className="drawerBtn">
              ☰
            </button>
          </div>

          <div className="navbar">
            <ul className="navbar__list">
              <Link className="navbar__link" to="/about">
                About
              </Link>
              <ul className="dropdown">
                <ul className="dropdown__hover">
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
              <Link className="navbar__link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

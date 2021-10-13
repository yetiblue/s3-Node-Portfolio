// import logo from "./logo.svg";
import "./header.css";
import MetaTags from "react-meta-tags";
import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { showSidebar: false };
  }
  openSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  render() {
    let sidebar = this.state.showSidebar ? "sidebar" : "sidebar-show";
    console.log(sidebar);
    return (
      <div className="wrapper">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>
        <div className={sidebar}>
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
              <a className="sidebar__link" href="">
                Home
              </a>
            </li>
            <li className="sidebar__li">
              <a className="sidebar__link" href="">
                Blog
              </a>
            </li>
            <li className="sidebar__li">
              <a className="sidebar__link" href="">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="header col-12">
          <div className="header__site-title">
            {/* <h1>Timmy Zhou</h1> */}
            <h1>Sample Text</h1>
          </div>
          <div className="hamburger">
            <button onClick={this.openSidebar.bind(this)} className="drawerBtn">
              ☰
            </button>
          </div>

          <div className="navbar">
            <ul className="navbar__list">
              <a className="navbar__link" href="">
                Home
              </a>

              <a className="navbar__link" href="">
                Blog
              </a>

              <a className="navbar__link" href="">
                About
              </a>
            </ul>
          </div>

          {/* <button className="openbtn">☰ Open Sidebar</button> */}
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

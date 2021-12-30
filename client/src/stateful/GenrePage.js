import Header from "./header.js";
import "./header.css";

import PhotoMenu from "../stateless/PhotoMenu.js";
import React from "react";
import axios from "axios";

class GenreItems extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "thsprops");
    this.state = {
      generativeItems: [
        {
          text: "Stills",
          urlBase: "generative", //passes this as the base url after domain to the child component for <link> usage

          url: "stills",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/static/Noise.png",
        },

        {
          text: "Videos",
          url: "videos",
          urlBase: "generative",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/static/Screen+Shot+2021-11-09+at+12.55.35+PM.png",
        },
      ],
      menuItems: [
        {
          id: 0,
          text: "Urban",
          urlBase: "photography",
          url: "urban",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC00123.jpg",
        },

        {
          id: 1,
          text: "Pastel",
          url: "pastel",
          urlBase: "photography",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/static/DSC01395+(1).jpg",
        },
        {
          id: 2,
          text: "Travel",
          url: "travel",
          urlBase: "photography",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/static/DSC09598.jpg",
        },
        {
          id: 3,
          text: "Landscape",
          url: "landscape",
          urlBase: "photography",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/static/DSC09563.jpg",
        },
      ],
    };
  }

  // }

  render() {
    let displayMenu;
    let isGenerative = this.props.photoOrGenerative;
    if (!isGenerative) {
      displayMenu = <PhotoMenu photoList={this.state.menuItems} />;
    } else {
      displayMenu = <PhotoMenu photoList={this.state.generativeItems} />;
    }
    return (
      <div>
        <Header />
        {displayMenu}
      </div>
    );
  }
}
export default GenreItems;

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
      generativeItems: [],
      menuItems: [
        {
          text: "Urban",
          url: "urban",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC00123.jpg",
        },

        {
          text: "Pastel",
          url: "pastel",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/pastel/facades.png",
        },
        {
          text: "Travel",
          url: "travel",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/travel/DSC09598.jpg",
        },
        {
          text: "Landscape",
          url: "landscape",

          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC09563.jpg",
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
import Header from "../stateful/header.js";
import "./header.css";

import PhotoMenu from "../stateless/PhotoMenu.js";
import React from "react";
import axios from "axios";

class Photography extends React.Component {
  constructor() {
    super();
    this.state = {
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
    console.log(this.state.menuItems);
    return (
      <div>
        <Header />
        <PhotoMenu photoList={this.state.menuItems} />
      </div>
    );
  }
}
export default Photography;

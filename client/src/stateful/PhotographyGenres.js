import Header from "../stateful/header.js";
import "./PhotographyGenres.css";
import PhotoGrid from "../stateless/PhotoGrid.js";
import React from "react";
import axios from "axios";

class Photography extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          text: "Urban",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC00122-2.jpg",
        },
        {
          text: "Landscape",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/landscape/DSC09532.jpg",
        },
        {
          text: "Pastel",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/pastel/facades.png",
        },
        {
          text: "Travel",
          src:
            "https://timmyportfolio.s3.us-east-2.amazonaws.com/travel/DSC09598.jpg",
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
        <PhotoGrid photoList={this.state.menuItems} />
      </div>
    );
  }
}
export default Photography;

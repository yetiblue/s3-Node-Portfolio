import Header from "../stateful/header.js";
import PhotoGrid from "../stateless/PhotoGrid.js";
import React from "react";

class GalleryPage extends React.Component {
  constructor() {
    super();
    this.state = { photoList: [] };
  }
  render() {
    return (
      <div>
        <Header />
        <PhotoGrid />
      </div>
    );
  }
}
export default GalleryPage;

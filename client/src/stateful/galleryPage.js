import React from "react";
import "./galleryPage.css";
import Header from "../stateless/header";
import PhotoGrid from "../stateless/photoGrid.js";

class GalleryPage extends React.Component {
  render() {
    return (
      <div className="grandParent">
        <div className="app">
          <Header />
          <PhotoGrid />
        </div>
      </div>
    );
  }
}
export default GalleryPage;

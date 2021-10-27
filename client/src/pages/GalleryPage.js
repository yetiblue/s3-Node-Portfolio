import Header from "../stateful/header.js";
import PhotoGrid from "../stateless/PhotoGrid.js";
import React from "react";

class GalleryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      photoList: [
        {
          id: 1,
          src:
            "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
        },
        {
          id: 2,
          src:
            "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
        },
        {
          id: 3,
          src:
            "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
        },
        {
          id: 1,
          src:
            "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
        },
      ],
    };
  }
  // getDerivedStateFromProps(){
  //set state here with an axios call before the prop is passed to child?
  // }
  render() {
    console.log(this.state.photoList);
    return (
      <div>
        <Header />
        <PhotoGrid photoList={this.state.photoList} />
      </div>
    );
  }
}
export default GalleryPage;

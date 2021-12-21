import "./PhotoGrid.css";
import React, { useState } from "react";
function PhotoGrid(props) {
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li">
      <img src={photo.src} />
      <h6> {photo.text}</h6>
    </li>
  ));
  return (
    <div className="wrapper">
      <ul className="photoWrapper">{listPhotos}</ul>
    </div>
  );
}
export default PhotoGrid;

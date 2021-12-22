import "./PhotoMenu.css";
import PhotoModal from "../stateful/PhotoModal.js";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
function PhotoMenu(props) {
  // const photos = [
  // ];
  const [modalOpen, setModalOpen] = useState(false);
  const [photoID, setPhotoID] = useState(0);
  console.log(modalOpen, "modalopen");
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  const passPhotosToModal = props.photoList;

  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li">
      {/* <Link to={`/${photo.urlBase}/${photo.url}`}>
        <h6 className="photoText"> {photo.text}</h6>

        <img className="image" src={photo.src} />
      </Link> */}
      <img
        className="image"
        onClick={() => {
          setModalOpen(!modalOpen);
          setPhotoID(photo.id);
        }}
        src={photo.src}
      />
    </li>
  ));
  let renderModal;
  if (!modalOpen) {
  } else {
    renderModal = (
      <PhotoModal
        closeModal={[modalOpen, setModalOpen]}
        modalPhotos={passPhotosToModal}
        targetID={photoID}
      />
    );
  }
  return (
    <div className="menu">
      {renderModal}
      <ul className="menuWrapper">{listPhotos}</ul>
    </div>
  );
}
export default PhotoMenu;

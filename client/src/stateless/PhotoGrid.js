import "./PhotoGrid.css";
import PhotoModal from "../stateful/PhotoModal.js";

import React, { useState } from "react";
function PhotoGrid(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [photoID, setPhotoID] = useState(0);
  console.log(modalOpen, "modalopen");
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  const passPhotosToModal = props.photoList;
  let incrementID = 0;
  //loop through passPhotostoModal and add in the id here?
  passPhotosToModal.forEach((photo, incrementID) => {
    photo.id = incrementID++;
  });
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li">
      <img
        onClick={() => {
          setModalOpen(!modalOpen);
          setPhotoID(photo.id);
        }}
        src={photo.src}
      />
      <h6> {photo.text}</h6>
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
    <div className="wrapper">
      {renderModal}
      <ul className="photoWrapper">{listPhotos}</ul>
    </div>
  );
}
export default PhotoGrid;

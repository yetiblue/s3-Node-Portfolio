import "./PhotoGrid.css";
import { useParams } from "react-router-dom";

import PhotoModal from "../stateful/PhotoModal.js";

import React, { useState } from "react";
function PhotoGrid(props) {
  //props from GalleryPage.js component
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
  const params = useParams();
  console.log(params.id, "params iD");
  let listPhotos;
  if (params.id === "videos") {
    listPhotos = props.photoList.map((photo) => (
      <li className="photoWrapper__li">
        <video
          className="photoWrapper__li"
          autoPlay
          loop
          muted
          onClick={() => {
            setModalOpen(!modalOpen);
            setPhotoID(photo.id);
          }}
        >
          <source src={photo.src}></source>
        </video>
        {/* <h6> {photo.text}</h6> */}
      </li>
    ));
  } else {
    listPhotos = props.photoList.map((photo) => (
      <li className="photoWrapper__li">
        <img
          onClick={() => {
            setModalOpen(!modalOpen);
            setPhotoID(photo.id);
          }}
          src={photo.src}
        />
        {/* <h6> {photo.text}</h6> */}
      </li>
    ));
  }
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

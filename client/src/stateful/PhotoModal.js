import "./PhotoModal.css";
import React from "react";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
  }
  componentDidMount() {
    this.setState({ currentCount: this.props.targetID });
  }

  render() {
    let photoList = this.props.modalPhotos;
    console.log(this.state.currentCount, "current count");
    console.log(photoList[0].src, "photolist on modal comp");

    return (
      <div>
        <img src={photoList[this.state.currentCount].src} />
      </div>
    );
  }
}
export default PhotoModal;

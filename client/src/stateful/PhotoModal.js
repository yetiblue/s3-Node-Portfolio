import "./PhotoModal.css";
import { withRouter } from "react-router";

import React from "react";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.setState({ currentCount: this.props.targetID }); //targetID is the ID of the image clicked in the gallery
  }
  previous() {
    console.log("called previous", this.state.currentCount);
    if (this.state.currentCount > 0) {
      this.setState((prevState) => ({
        currentCount: prevState.currentCount - 1,
      }));
    } else {
      this.setState({ currentCount: this.props.modalPhotos.length - 1 });
    }
  }
  next() {
    console.log("called next", this.state.currentCount);
    if (this.state.currentCount < this.props.modalPhotos.length - 1) {
      this.setState((prevState) => ({
        currentCount: prevState.currentCount + 1,
      }));
    } else {
      this.setState({ currentCount: 0 });
    }
  }
  closeModal() {
    let [data, setData] = this.props.closeModal;
    setData(!data);
  }
  render() {
    let photoList = this.props.modalPhotos;
    let photoOrVideo;
    const id = this.props.match.params.id;
    if (id == "videos") {
      photoOrVideo = (
        <video
          autoPlay
          loop
          muted
          className="lightboxImage"
          src={photoList[this.state.currentCount].src}
        />
      );
    } else {
      photoOrVideo = (
        <img
          className="lightboxImage"
          src={photoList[this.state.currentCount].src}
        />
      );
    }

    console.log(this.state.currentCount, "current count");
    console.log(photoList[0].src, "photolist on modal comp");

    return (
      <div className="modal">
        <div onClick={this.closeModal} className="exit">
          <img
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/static/X.png"
            height="20"
            width="10"
          />
          X
        </div>
        <div className="prevButton" onClick={this.previous}>
          <img
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/static/leftarrow.png"
            width="50"
            height="50"
          />
        </div>
        <div className="nextButton" onClick={this.next}>
          <img
            className="rightArrow"
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/static/rightarrow.png"
            height="50"
            widht="50"
          />
        </div>

        <div className="content">{photoOrVideo}</div>
        <div onClick={this.closeModal} className="exit-click-region"></div>
      </div>
    );
  }
}
export default withRouter(PhotoModal);

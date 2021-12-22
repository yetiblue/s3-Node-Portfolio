import "./PhotoModal.css";
import React from "react";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  componentDidMount() {
    this.setState({ currentCount: this.props.targetID }); //targetID is the ID of the image clicked in the gallery
  }
  async previous() {
    console.log("called previous", this.state.currentCount);
    if (this.state.currentCount > 0) {
      await this.setState((prevState) => ({
        currentCount: prevState.currentCount - 1,
      }));
    } else {
      await this.setState({ currentCount: this.props.modalPhotos.length - 1 });
    }
  }
  async next() {
    console.log("called next", this.state.currentCount);
    if (this.state.currentCount < this.props.modalPhotos.length - 1) {
      await this.setState((prevState) => ({
        currentCount: prevState.currentCount + 1,
      }));
    } else {
      await this.setState({ currentCount: 0 });
    }
  }
  render() {
    let photoList = this.props.modalPhotos;
    console.log(this.state.currentCount, "current count");
    console.log(photoList[0].src, "photolist on modal comp");

    return (
      <div className="modal">
        <button className="exit">X</button>
        <button className="prevButton" onClick={this.previous}>
          ←
        </button>
        <button className="nextButton" onClick={this.next}>
          →
        </button>
        <div className="content">
          <img
            className="lightboxImage"
            src={photoList[this.state.currentCount].src}
          />
        </div>
      </div>
    );
  }
}
export default PhotoModal;

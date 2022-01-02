import Header from "../stateful/header.js";
import PhotoGrid from "../stateless/PhotoGrid.js";
import React from "react";
import axios from "axios";

class GalleryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      serverResponse: [],
    };
  }

  // }
  async componentDidMount() {
    console.log(this.props.match.params.id, "param id");
    let axiosString =
      `${process.env.PORT}/getphotos/${this.props.match.params.id}` ||
      `http://localhost:4000/getphotos/${this.props.match.params.id}`;
    try {
      const response = await axios.get(axiosString); //ugly temp test to see if i can get the param to send to mongo for querying,
      let photoArray = [];
      const serverStuff = response.data;
      await serverStuff.forEach((photo) => photoArray.push(photo));
      console.log(photoArray);
      this.setState({ serverResponse: photoArray });
    } catch {
      console.log(error);
    }
  }
  render() {
    console.log(this.state.photoList);
    return (
      <div>
        <Header />
        <PhotoGrid photoList={this.state.serverResponse} />
      </div>
    );
  }
}
export default GalleryPage;

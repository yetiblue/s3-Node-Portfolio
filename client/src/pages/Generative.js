import Header from "../stateful/header.js";
import PhotoGrid from "../stateless/PhotoGrid.js";
import React from "react";
import axios from "axios";

class Generative extends React.Component {
  constructor() {
    super();
    this.state = {
      serverResponse: [],
    };
  }

  // }
  async componentDidMount() {
    console.log(this.props.match.path, "param id");
    try {
      const response = await axios.get(
        `http://localhost:4000/getphotos${this.props.match.path}` //ugly bc .path includes the / in front
      );
      let photoArray = [];
      const serverStuff = response.data;
      await serverStuff.forEach((photo) => photoArray.push(photo));
      console.log(photoArray);
      this.setState({ serverResponse: photoArray });
    } catch {
      console.log("error");
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
export default Generative;

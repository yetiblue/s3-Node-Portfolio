//header and then a big looping video
import Header from "../stateful/header.js";
import About from "../stateless/About.js";
import React from "react";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      serverResponse: [],
    };
  }
  componentDidMount() {
    document.body.style.overflow = "visible";
  }
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}
export default AboutPage;

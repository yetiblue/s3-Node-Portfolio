//header and then a big looping video
import Header from "../stateful/header.js";

function HomePage() {
  return (
    <div>
      <Header />
      <video width="1600" height="800" controls autoplay>
        <source
          //   src="https://timmyportfolio.s3.us-east-2.amazonaws.com/generative/spikeyplant.mov"
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/generative/FlowField.mov"
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default HomePage;

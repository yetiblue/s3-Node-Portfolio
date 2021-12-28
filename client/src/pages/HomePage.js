//header and then a big looping video
import Header from "../stateful/header.js";
import HomeVideo from "../stateless/HomeVideo.js";

function HomePage() {
  return (
    <div>
      <HomeVideo />
      {/* <Header /> */}
    </div>
  );
}
export default HomePage;

//header and then a big looping video
import Header from "../stateful/header.js";
import About from "../stateless/About.js";

function HomePage() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
export default HomePage;

import "./PhotoMenu.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
function photoMenu(props) {
  // const photos = [
  // ];
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li">
      <Link to={`/photography/${photo.url}`}>
        <h6 className="photoText"> {photo.text}</h6>

        <img className="image" src={photo.src} />
      </Link>
    </li>
  ));
  return (
    <div className="menu">
      <ul className="menuWrapper">{listPhotos}</ul>
      {/* <video width="1600" height="800" controls autoplay>
        <source
          //   src="https://timmyportfolio.s3.us-east-2.amazonaws.com/generative/spikeyplant.mov"
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/generative/FlowField.mov"
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
export default photoMenu;

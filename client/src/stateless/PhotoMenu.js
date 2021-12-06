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

        <img src={photo.src} />
      </Link>
    </li>
  ));
  return (
    <div className="wrapper">
      <ul className="photoWrapper">{listPhotos}</ul>
    </div>
  );
}
export default photoMenu;

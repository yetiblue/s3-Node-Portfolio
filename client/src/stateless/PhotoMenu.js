import "./PhotoMenu.css";
import { useParams } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

function PhotoMenu(props) {
  const params = useParams();
  console.log(params.id, "p[aram id");
  // if (params.id == "generative") {
  //   document.menuWrapper.style.marginLeft = "25%";
  // }
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li-menu">
      <Link to={`/${photo.urlBase}/${photo.url}`}>
        <h6 className="photoText"> {photo.text}</h6>

        <img className="image" src={photo.src} />
      </Link>
    </li>
  ));

  return (
    <div className="menu">
      <ul className="menuWrapper">{listPhotos}</ul>
    </div>
  );
}
export default PhotoMenu;

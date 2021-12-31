import "./PhotoMenu.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

function PhotoMenu(props) {
  useEffect(() => {
    if (window.location.pathname == "/generative" && window.innerWidth > 1312) {
      document.getElementsByClassName("menuWrapper")[0].style.marginLeft =
        "23%";
      // document.getElementsByClassName("menuWrapper")[0].style.marginTop = "18%";
      console.log(window.innerWidth, "width");
    } else if (
      window.location.pathname == "/generative" &&
      window.innerWidth > 312 &&
      window.innerWidth < 767
    ) {
      document.getElementsByClassName("menuWrapper")[0].style.marginLeft =
        "-7%";
      // document.getElementsByClassName("menuWrapper")[0].style.marginTop = "18%";
      console.log(window.innerWidth, "width");
    } else if (
      window.location.pathname == "/generative" &&
      window.innerWidth > 768 &&
      window.innerWidth < 1024
    ) {
      document.getElementsByClassName("menuWrapper")[0].style.marginLeft =
        "23%";
      document.getElementsByClassName("menuWrapper")[0].style.marginTop = "18%";
      console.log(window.innerWidth, "width");
    }
  }, []);

  console.log(window.location.pathname);
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li-menu">
      <Link className="photoLink" to={`/${photo.urlBase}/${photo.url}`}>
        <img className="image" src={photo.src} />
        <h6 className="photoText"> {photo.text}</h6>
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

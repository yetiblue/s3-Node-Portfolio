import "./PhotoMenu.css";
import MetaTags from "react-meta-tags";

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
    //using hook to retrieve the '/generative' part, or else on first load, window.location.pathname wont be availble.
    // if (window.location.pathname == "/generative" && window.innerWidth > 1312) {
    //   document.getElementsByClassName(
    //     "photoWrapper__li-menu"
    //   )[0].style.marginLeft = "10em"; //on desktop, bc there's only 2 squares instead of 4 they need to be in the center of the page
    //   console.log(window.innerWidth, "width");
    // }
    //   window.location.pathname == "/generative" &&
    //   window.innerWidth > 312 &&
    //   window.innerWidth < 767
    // ) {
    //   document.getElementsByClassName("menuWrapper")[0].style.marginLeft =
    //     "-7%"; //on mobile all the otions are stacked, so this just needs a bit of nudging to the left
    //   console.log(window.innerWidth, "width");
    // } else if (
    //   window.location.pathname == "/generative" &&
    //   window.innerWidth > 768 &&
    //   window.innerWidth < 1024
    // ) {
    //   document.getElementsByClassName("menuWrapper")[0].style.marginLeft = "0%";
    //   document.getElementsByClassName("menuWrapper")[0].style.marginTop = "18%";
    // }
  }, []);

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
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <ul className="menuWrapper">{listPhotos}</ul>
    </div>
  );
}
export default PhotoMenu;

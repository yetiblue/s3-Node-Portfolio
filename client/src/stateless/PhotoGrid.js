import "./PhotoGrid.css";
function photoGrid() {
  return (
    <div className="wrapper">
      <ul className="photoWrapper">
        <li className="photoWrapper__li">
          <img
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
            alt="A Toyota Previa covered in graffiti"
            loading="lazy"
          />
        </li>
        <li className="photoWrapper__li">
          <img
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
            alt="Interesting living room light through a window"
            loading="lazy"
          />
        </li>
        <li className="photoWrapper__li">
          <img
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
            alt="Sara on a red bike"
            loading="lazy"
          />
        </li>
        <li className="photoWrapper__li">
          <img
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
            alt="XOXO venue in between talks"
            loading="lazy"
          />
        </li>

        <li className="photoWrapper__li">
          <img
            src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg"
            alt="Portrait of Justin Pervorse"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  );
}
export default photoGrid;

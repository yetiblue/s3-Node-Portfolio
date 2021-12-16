import "./PhotoGrid.css";

function photoGrid(props) {
  // const photos = [
  // ];
  const listPhotos = props.photoList.map((photo) => (
    <li className="photoWrapper__li">
      <img src={photo.src} />
      <h6> {photo.text}</h6>
    </li>
  ));
  return (
    <div className="wrapper">
      <ul className="photoWrapper">{listPhotos}</ul>
    </div>
  );
}
export default photoGrid;

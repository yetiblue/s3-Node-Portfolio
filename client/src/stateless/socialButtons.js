import instagram from "../instagram1.png";
function socialButtons() {
  return (
    <div className="wrapper">
      <div className="social-media">
        <div className="social-media__buttons">
          <li>
            <img className="social-media__image" src={instagram}></img>
          </li>
        </div>
      </div>
    </div>
  );
}
export default socialButtons;

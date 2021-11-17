import "./FileUpload.css";

function FileUpload() {
  return (
    <div className="wrapper">
      <div className="drop-area">
        <p className="instructions">Drag Files Here</p>
        <input type="file" className="upload-button" name="name" multiple />
        <br />
        <br />
      </div>
      <div>
        <select name="upload-categories" className="upload-categories">
          <option hidden> </option>

          <option value="landscape"> Landscape </option>
          <option value="urban"> Urban </option>
          <option value="pastel"> Pastel </option>
          <option value="travel"> Travel </option>
        </select>
      </div>
      // After uploading multiple files, click Submit.
      <br />
      <div className="submit-wrapper">
        <input className="submit-button" type="submit" value="Submit" />
      </div>
    </div>
  );
}
export default FileUpload;

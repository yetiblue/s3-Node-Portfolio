import "./FileUpload.css";
import React from "react";
import axios from "axios";

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",
      uploadFiles: [],
      axiosRoute: `http://localhost:4000/uploadphotos/`,
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.returnSelectValue = this.returnSelectValue.bind(this);
  }
  componentDidMount() {}
  async handleFileUpload(event) {
    let files = event.currentTarget.files;
    console.log(files, "files");
    let fileArray = [];
    // let photoObject = [];

    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
      // let uploadFile = new File([files[i]], files[i].name);
      // console.log(uploadFile, "uploadFile");

      fileArray.push(files[i]);
      console.log(fileArray, "fileArray");
    }

    await this.setState({ uploadFiles: fileArray });
    console.log(this.state.uploadFiles, "finished setting state");
  }
  async returnSelectValue(event) {
    await this.setState({ selectValue: event.target.value });
    console.log(this.state.selectValue);
  }
  submitForm(e) {
    let formData = new FormData();
    this.state.uploadFiles.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("folderName", this.state.selectValue);

    console.log(formData, "formData");
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(this.state.axiosRoute, formData, config)
      .then((response) => {
        console.log("Successfully Posted");
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="drop-area">
          <p className="instructions">Drag Files Here</p>
          <input
            type="file"
            onChange={this.handleFileUpload}
            className="upload-button"
            name="name"
            multiple
          />
          <br />
          <br />
        </div>
        <div>
          <select
            value={this.state.selectValue}
            name="upload-categories"
            className="upload-categories"
            onChange={this.returnSelectValue}
          >
            <option hidden> </option>

            <option value="landscape"> Landscape </option>
            <option value="urban"> Urban </option>
            <option value="pastel"> Pastel </option>
            <option value="travel"> Travel </option>
            <option value="stills"> Stills </option>
            <option value="videos"> Videos </option>
          </select>
        </div>
        // After uploading multiple files, click Submit.
        <br />
        <div className="submit-wrapper">
          <input
            onClick={this.submitForm}
            className="submit-button"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    );
  }
}
export default FileUpload;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import GalleryPage from "./pages/GalleryPage.js";
import About from "./stateless/About.js";
import Header from "./stateful/header.js";
import PhotoGrid from "./stateless/PhotoGrid.js";
import reportWebVitals from "./reportWebVitals";
import FileUpload from "./stateful/FileUpload.js";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={About} />
        <Route exact path="/uploadimage" component={FileUpload} />
        <Route exact path="/photography" component={GalleryPage} />
        <Route exact path="/generative" component={GalleryPage} />

        <Route exact path="/urban" component={GalleryPage} />
        <Route exact path="/travel" component={GalleryPage} />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

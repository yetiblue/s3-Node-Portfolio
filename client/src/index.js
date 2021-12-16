import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import GalleryPage from "./pages/GalleryPage.js";
import Photography from "./pages/Photography";
import Generative from "./pages/Generative.js";
import ContactPage from "./pages/ContactPage.js";
import AboutPage from "./pages/AboutPage.js";
import HomePage from "./pages/HomePage.js";
// import PhotoGrid from "./stateless/PhotoGrid.js";
import reportWebVitals from "./reportWebVitals";
import FileUpload from "./stateful/FileUpload.js";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />

        <Route exact path="/uploadimage" component={FileUpload} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/photography/:id" component={GalleryPage} />

        <Route exact path="/generative" component={Generative} />
        <Route exact path="/generative/:id" component={GalleryPage} />

        {/* <Route exact path="/urban" component={GalleryPage} /> */}
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

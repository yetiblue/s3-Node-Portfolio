import "./About.css";
function About() {
  return (
    <div className="about-content">
      <h1 className="about-header">About</h1>
      <div className="columns">
        <div className="columns__portrait">
          <img
            className="columns__portrait-image"
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC09563.jpg"
          />
        </div>
        <div className="columns__text">
          <p>
            Tyler Hobbs is a visual artist from Austin, Texas who works
            primarily with algorithms, plotters, and paint. His artwork focuses
            on computational aesthetics, how they are shaped by the biases of
            modern computer hardware and software, and how they relate to and
            interact with the natural world around us. Tyler develops and
            programs custom algorithms that are used to generate visual imagery.
            Often, these strike a balance between the cold, hard structure that
            computers excel at, and the messy, organic chaos we can observe in
            the natural world around us. Tyler’s work has been shown
            internationally, and has been collected in more than a dozen
            countries around the world. For collaborations, custom requests, or
            general inquiries please feel free to reach out any time.
          </p>
          <div className="columns-contact">
            <h3>Get in Touch</h3>
            <p className="columns-contact__text">Email:</p>
            <p className="columns-contact__text">
              Instagram:{" "}
              <a href="https://www.instagram.com/hy_tiide/" target="_blank">
                @hy_tiide
              </a>
            </p>
            <p className="columns-contact__text">
              Art:{" "}
              <a
                href="https://www.instagram.com/100daysofgenart/"
                target="_blank"
              >
                @100_days_of_gen_art
              </a>
            </p>
            <p className="columns-contact__text">
              Blog:{" "}
              <a href="https://medium.com/knowledge-foundation" target="_blank">
                Medium
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

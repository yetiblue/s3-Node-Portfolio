import "./About.css";
function About() {
  return (
    <div className="about-content">
      <h1 className="about-header">About</h1>
      <div className="columns">
        <div className="columns__portrait">
          <img
            className="columns__portrait-image"
            // src="https://timmyportfolio.s3.us-east-2.amazonaws.com/urban/DSC09563.jpg"
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/static/DSC00129-2.jpg"
          />
        </div>
        <div className="columns__text">
          <p>
            Timmy Zhou is a multi-disciplinary creator based in New York City.
            He is mainly focused on developing fullstack web applications, such
            as this portfolio site. In his free time, he dabbles artistically
            with photography around the city, and more recently has started
            producing generative art beginning with the 100 Days of Generative
            Art Project. He is currently a Junior at NYU's Interactive Media
            Arts program, and maintains a blog chronicling his adventures with
            Ultrarunning, life lessons and software documentation.
          </p>
          <div className="columns-contact">
            <h3>Get in Touch</h3>
            <p className="columns-contact__text">Email: tz1343@nyu.edu</p>
            <p className="columns-contact__text">
              Instagram:{" "}
              <a
                className="social-links"
                href="https://www.instagram.com/hy_tiide/"
                target="_blank"
              >
                @hy_tiide
              </a>
            </p>
            <p className="columns-contact__text">
              Art:{" "}
              <a
                className="social-links"
                href="https://www.instagram.com/100daysofgenart/"
                target="_blank"
              >
                @100_days_of_gen_art
              </a>
            </p>
            <p className="columns-contact__text">
              Blog:{" "}
              <a
                className="social-links"
                href="https://medium.com/knowledge-foundation"
                target="_blank"
              >
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

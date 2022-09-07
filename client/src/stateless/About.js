import "./About.css";
import { useParallax } from "react-scroll-parallax";

function About() {
  const { ref } = useParallax < HTMLDivElement > { speed: -100 };
  return (
    <div className="wrapper">
      <div className="about-content">
        <div className="columns__portrait">
          <img
            className="columns__portrait-image"
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/static/DSC00129-2.jpg"
          />
        </div>

        <div ref={ref} className="columns">
          <div></div>
          <div className="columns__text">
            <p>
              Hi!<br></br> <br></br>I'm a multi-disciplinary creator based in
              New York City. I study at NYU's Interactive Media Arts program,
              which covers a wide range of topics such as coding, physical
              computing, VR/AR, and UX. Out of those, I've decided to focus on
              web development, and this portfolio site is my most recent
              personal project. In my free time, I dabble artistically with
              photography around the city, and have recently started producing
              generative art beginning with my 100 Days of Generative Art
              Project.<br></br>
              <br></br> I also maintain a blog chronicling my adventures with
              ultrarunning, life lessons and software documentation. The link
              can be found below!
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
    </div>
  );
}
export default About;

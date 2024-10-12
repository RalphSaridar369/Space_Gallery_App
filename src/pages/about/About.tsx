import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-about-container">
        <p className="about-description">
          I’ve always been fascinated by space images and astrophysics, which
          inspired me to create this app. Using TypeScript, React, and NASA’s
          API, I developed an interface to showcase space-related information
          and images. Thank you for visiting.
        </p>
        <p className="about-description">
          Sincerely.
          <br />
          Ralph Saridar.
        </p>
        <img src={require("../../images/nirv.png")} className="sh" />
      </div>
    </div>
  );
};

export default About;

import "./About.css";

const About = () => {
  return (
    <div className="About-Container">
      <div>
        <p className="AboutDescription">
          We try our best to bring the best outcome of a project. this project
          was meant to create an interface showing up information related to
          Space all while using the NASA API. Thank you for visiting.
        </p>
        <p className="AboutDescription">
          Sincerely.
          <br />
          Ralph Saridar.
        </p>
        <img src={require("../../images/nirv.png")} className="sh" />
      </div>
      {/* <div className="About-Inner-Container">
        <div className="About-Inner-Body">
          <p style={aboutDescription} className="AboutDescription">
            We try our best to bring the best outcome of a project. this project
            was meant to create an interface showing up information related to
            Space all while using the NASA API. Thank you for visiting.
          </p>
          <p style={aboutDescription} className="AboutDescription">
            Sincerely.
            <br />
            Ralph Saridar.
          </p>
          <img src={require("../../images/nirv.png")} className="sh" />
        </div>
      </div> */}
    </div>
  );
};

export default About;

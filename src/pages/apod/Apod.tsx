import "../../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Apod.css";

const Apod = () => {
  const [data, setData] = useState({
    loading: true,
    image: "",
    thumbnail: "",
    title: "",
    date: "",
    photographer: "",
    explanation: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GejSjhiGtgqQYmQv7YUy2rSbUnbWLbg0K3ZGOhlR"
      )
      .then((response) => {
        const { title, date, copyright, explanation, media_type, url } =
          response.data;

        setData({
          loading: false,
          title,
          date,
          photographer: copyright || "Unknown",
          explanation,
          image: url,
          thumbnail:
            media_type === "image" ? url : require("../../images/Video.gif"),
        });
      })
      .catch((err) => {
        console.error("Error fetching data from NASA API:", err);
      });
  }, []);

  const { loading, image, thumbnail, title, date, photographer, explanation } =
    data;

  if (loading || !image) {
    return (
      <div className="apod-loading-container">
        <img src={require("../../images/Loading.gif")} alt="Loading..." />
      </div>
    );
  } else {
    return (
      <div className="body-apod">
        <a href={image} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} className="main-image" alt="APOD" />
        </a>
        <h2 className="title">{title}</h2>
        <div className="info-apod">
          <h3 className="photographer">by {photographer}</h3>
          <h3 className="date">{date}</h3>
          <h5 className="explanation">{explanation}</h5>
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img className="small-image" src={thumbnail} alt="Thumbnail" />
          </a>
        </div>
      </div>
    );
  }
};

export default Apod;

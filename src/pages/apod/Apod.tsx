import "../../App.css";
import { useQuery } from "@tanstack/react-query";
import "./Apod.css";
import { fetchApod } from "../../api";

const Apod = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["apod"],
    queryFn: fetchApod,
  });

  if (isLoading) {
    return (
      <div className="apod-loading-container">
        <img src={require("../../images/loading.gif")} alt="Loading..." />
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>Error fetching data from NASA API: {error.message}</div>;
  }

  const { title, date, copyright, explanation, media_type, url: image } = data;

  const thumbnail =
    media_type === "image" ? image : require("../../images/video.gif");
  const photographer = copyright || "Unknown";

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
};

export default Apod;

import "../../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Item = (props) => {
  const styledImages = {
    width: "20px!important",
    height: "20px!important",
  };

  const styledTitle = {
    marginTop: "30px",
  };

  let data: string[] = [];

  useEffect(() => {
    axios
      .get(
        `https://images-assets.nasa.gov/${
          props.Media.media_type === "audio" ? "audio" : "video"
        }/` +
          props.Media.nasa_id +
          "/collection.json"
      )
      .then((res) => {
        for (const s of res.data) {
          if (
            s.endsWith(
              props.Media.media_type === "video" ? "~large.mp4" : "~orig.mp3"
            )
          ) {
            data.push(encodeURI(s));
          }
        }
        data.push(props.Media.media_type);
      });
  }, [props.Media.nasa_id]);

  // Handle audio type
  if (props.Media.media_type === "audio") {
    // Fetch audio data
    data = [
      props.Media.nasa_id + "",
      props.Media.date_created + "",
      "123",
      props.Media.description + "",
    ];

    return (
      <div style={styledImages} className="bodyItem">
        <Link
          to={`/spacelibrary/${props.Media.media_type}/${props.Media.title}`}
          target="_blank"
          onClick={() => {
            localStorage.setItem("url", JSON.stringify(data));
          }}
        >
          <img
            alt=""
            style={styledImages}
            src={require("../../../images/speaker.png")}
          />
        </Link>
        <div>
          <h4 style={styledTitle}>{props.Media.title}</h4>
          <p>{props.Media.date_created}</p>
        </div>
      </div>
    );
  }

  // Handle video type
  if (props.Media.media_type === "video") {
    data = [
      props.Media.title + "",
      "by " + (props.Media.photographer ?? "Unknown") + "",
      props.Media.date_created + "",
      props.Media.description + "",
      "",
      props.Details.links[0].href + "",
    ];

    // Fetch video data

    return (
      <div style={styledImages} className="bodyItem">
        <Link
          to={`/spacelibrary/${props.Media.media_type}/${props.Media.title}`}
          target="_blank"
          onClick={() => {
            localStorage.setItem("url", JSON.stringify(data));
          }}
        >
          <img alt="" style={styledImages} src={props.Details.links[0].href} />
        </Link>
        <div>
          <h4 style={styledTitle}>{props.Media.title}</h4>
          <p>{props.Media.date_created}</p>
        </div>
      </div>
    );
  }

  // Handle image type
  if (props.Media.media_type === "image") {
    data = [
      props.Media.title + "",
      "by " + (props.Media.photographer ?? "Unknown") + "",
      props.Media.date_created + "",
      props.Media.description + "",
      props.Details.links[0].href + "",
      props.Media.media_type,
    ];

    return (
      <div style={styledImages} className="bodyItem">
        <Link
          className="linkedImg"
          to={{
            pathname: `/spacelibrary/${props.Media.media_type}/${props.Media.title}`,
          }}
          target="_blank"
          onClick={() => {
            localStorage.setItem("url", JSON.stringify(data));
          }}
        >
          <img alt="" style={styledImages} src={props.Details.links[0].href} />
        </Link>
        <div>
          <h4 style={styledTitle}>{props.Media.title}</h4>
          <p>{props.Media.photographer}</p>
        </div>
      </div>
    );
  }

  return null; // Return null if media type does not match
};

export default Item;

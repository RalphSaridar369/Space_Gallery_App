import { useEffect, useState } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const [data, setData] = useState<{
    title: string;
    photographer: string;
    date_created: string;
    description: string;
    media_type: string;
    nasa_id: string;
    href: string | null;
  }>({
    title: "",
    photographer: "",
    date_created: "",
    description: "",
    media_type: "",
    nasa_id: "",
    href: null,
  });

  useEffect(() => {
    let href: string | null = null;

    if (props.item.data[0].media_type !== "audio") {
      href = props.item?.links?.[0]?.href ?? null;
    }
    setData({
      title: props.item.data[0].title,
      photographer: props.item.data[0].photographer ?? "Unknown",
      date_created: props.item.data[0].date_created,
      description: props.item.data[0].description,
      media_type: props.item.data[0].media_type,
      nasa_id: props.item.data[0].nasa_id,
      href: href,
    });
  }, []);

  const styledImages = {
    width: "20px!important",
    height: "20px!important",
  };

  const styledTitle = {
    marginTop: "30px",
  };

  return (
    <Link style={styledImages} className="item-body" to={`/${data.nasa_id}`}>
      <div className="item-image-container">
        <img
          alt=""
          style={styledImages}
          src={
            data.media_type === "video" || data.media_type === "image"
              ? data.href
              : require("../../../images/speaker.png")
          }
        />
      </div>

      <div>
        <h4 style={styledTitle}>{data.title}</h4>
        <p>{data.photographer}</p>
      </div>
    </Link>
  );
};

export default Item;

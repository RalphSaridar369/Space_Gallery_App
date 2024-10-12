import "../../apod/Apod.css";
import "../../../App.css";
import "../Audio.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetailed = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    const fetchItem = async () => {
      const query = `https://images-api.nasa.gov/search?q=${id}`;
      let res = await axios.get(query);
      setData(res.data.collection.items[0]);
    };

    const fetchItemImages = async () => {
      const imagesQuery = `https://images-api.nasa.gov/asset/${id}`;
      let res = await axios.get(imagesQuery);
      setImages(res.data.collection.items);
    };
    const fetchData = async () => {
      try {
        await Promise.all([fetchItem(), fetchItemImages()]).then(() => {
          setLoading(false);
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <></>;
  else {
    if (data.data[0].media_type === "image") {
      return (
        <div className="body-apod">
          <a href={images[1].href} target="_blank" rel="noreferrer">
            <img src={images[1].href} className="main-image" alt="main-image" />
          </a>
          <h2 className="title">{data.data[0].title}</h2>
          <div className="info-apod">
            <h3 className="photographer">{data.data[0].photographer}</h3>
            <h3 className="date">{data.data[0].date_created}</h3>
            <h5 className="explanation">{data.data[0].description}</h5>
            <a href={images[1].href} target="_blank" rel="noreferrer">
              <img
                className="small-image"
                alt="small-image"
                src={
                  images.filter((image) => image?.href.includes("small"))[0]
                    .href
                }
              />
            </a>
          </div>
        </div>
      );
    } else if (data.data[0].media_type === "video") {
      return (
        <div className="body-apod">
          <a href={images[1].href} target="_blank" rel="noreferrer">
            <img src={images[1].href} className="main-image" alt="main-image" />
          </a>
          <h2 className="title">{data.data[0].title}</h2>
          <div className="info-apod">
            <h3 className="photographer">{data.data[0].photographer}</h3>
            <h3 className="date">{data.data[0].date_created}</h3>
            <h5 className="explanation">{data.data[0].description}</h5>
            <a href={images[1].href} target="_blank" rel="noreferrer">
              <img
                className="small-image"
                alt="small-image"
                src={
                  images.filter((image) => image?.href.includes("small"))[0]
                    .href
                }
              />
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="AudioBodyApod">
          <a href={images[1].href} target="_blank" rel="noreferrer">
            <img
              src={require("../../../images/speaker.png")}
              alt="main-image"
              className="AudioMainImage"
            />
          </a>
          <h2 className="AudioTitle">{data[0]}</h2>
          <div className="AudioInfoApod">
            <h3 className="AudioPhotographer">{data.data[0].photographer}</h3>
            <h3 className="AudioDate">{data.data[0].date_created}</h3>
            <h5 className="AudioExplanation">{data.data[0].description}</h5>
            <a href={images[0].href} target="_blank" rel="noreferrer">
              <img
                className="AudioSmallImage"
                alt="small-image"
                src={require("../../../images/speaker.png")}
              />
            </a>
            <h1></h1>
          </div>
        </div>
      );
    }
  }
};

export default ItemDetailed;

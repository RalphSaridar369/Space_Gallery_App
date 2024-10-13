import "../../apod/Apod.css";
import "../../../App.css";
import "../Audio.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchItem, fetchItemImages } from "../../../api";

const ItemDetailed = () => {
  const { id } = useParams();

  const {
    data: itemData,
    isLoading: itemLoading,
    isError: itemError,
  } = useQuery({
    queryKey: ["itemData", id],
    queryFn: () => fetchItem(id as string),
  });

  const {
    data: images,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useQuery({
    queryKey: ["itemImages", id],
    queryFn: () => fetchItemImages(id as string),
  });

  if (itemLoading || imagesLoading) return <div></div>;
  if (itemError || imagesError) return <div>Error loading data...</div>;

  const mediaType = itemData.data[0].media_type;
  const title = itemData.data[0].title;
  const photographer = itemData.data[0].photographer;
  const dateCreated = itemData.data[0].date_created;
  const description = itemData.data[0].description;

  const mainImageHref = images[1]?.href;
  const smallImageHref = images.filter((image) =>
    image?.href.includes("small")
  )[0]?.href;

  return (
    <div className={mediaType === "audio" ? "audio-body-apod" : "body-apod"}>
      <a href={mainImageHref} target="_blank" rel="noreferrer">
        <img
          src={mainImageHref}
          className={mediaType === "audio" ? "audio-main-image" : "main-image"}
          alt="main-image"
        />
      </a>
      <h2 className={mediaType === "audio" ? "audio-title" : "title"}>
        {title}
      </h2>
      <div className={mediaType === "audio" ? "audio-info-apod" : "info-apod"}>
        <h3
          className={
            mediaType === "audio" ? "audio-photographer" : "photographer"
          }
        >
          {photographer}
        </h3>
        <h3 className={mediaType === "audio" ? "audio-date" : "date"}>
          {dateCreated}
        </h3>
        <h5
          className={
            mediaType === "audio" ? "audio-explanation" : "explanation"
          }
        >
          {description}
        </h5>
        {smallImageHref && (
          <a href={smallImageHref} target="_blank" rel="noreferrer">
            <img
              className={
                mediaType === "audio" ? "audio-small-image" : "small-image"
              }
              alt="small-image"
              src={smallImageHref}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ItemDetailed;

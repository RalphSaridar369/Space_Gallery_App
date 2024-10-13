import axios from "axios";

export const fetchImages = async (searchInput: string) => {
  const query = `https://images-api.nasa.gov/search?q=${searchInput}`;
  const res = await axios.get(query);
  return res.data.collection.items;
};

export const fetchApod = async () => {
  const response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=GejSjhiGtgqQYmQv7YUy2rSbUnbWLbg0K3ZGOhlR"
  );
  return response.data;
};

export const fetchItem = async (id: string) => {
  const query = `https://images-api.nasa.gov/search?q=${id}`;
  const res = await axios.get(query);
  return res.data.collection.items[0];
};

export const fetchItemImages = async (id: string) => {
  const imagesQuery = `https://images-api.nasa.gov/asset/${id}`;
  const res = await axios.get(imagesQuery);
  return res.data.collection.items;
};

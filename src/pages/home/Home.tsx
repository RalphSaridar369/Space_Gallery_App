import "../../App.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import Results from "./components/Results";
import { useQuery } from "@tanstack/react-query";
import { quotes } from "./Static";
import "./Home.css";
import { fetchImages } from "../../api";

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (quotes.length > 0) {
      const number = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[number]?.quote || "");
      setAuthor(quotes[number]?.author || "");
    }
  }, []);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["nasaImages", searchInput],
    queryFn: () => fetchImages(searchInput),
    enabled: false,
  });

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const bodyStyle = {
    paddingTop: "6rem",
  };

  return (
    <div className="body" style={bodyStyle}>
      <div className="quotes-container">
        <p className="quotes-quote">{quote}</p>
        <p className="quotes-author">{author}</p>
        <SearchInput search={changeSearch} submit={submitSearch} />
      </div>
      {isLoading ? (
        <div>
          <img
            src={require("../../images/loadingHome.gif")}
            className="hl"
            alt="loading"
          />
        </div>
      ) : (
        <Results results={data || []} />
      )}
    </div>
  );
};

export default Home;

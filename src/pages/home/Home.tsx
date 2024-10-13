import "../../App.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import Results from "./components/Results";
import { useQuery } from "@tanstack/react-query";
import { quotes } from "./Static";
import "./Home.css";
import { fetchImages } from "../../api";

const Home: React.FC = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
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
    setButtonPressed(true);
    refetch();
  };

  const body = {
    paddingTop: "6rem",
  };

  return (
    <div className="body" style={body}>
      <div className="quotes-container">
        <p className="Quotes-Quote">{quote}</p>
        <p className="Quotes-Author">{author}</p>
        <SearchInput search={changeSearch} submit={submitSearch} />
      </div>
      {buttonPressed && isLoading ? (
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

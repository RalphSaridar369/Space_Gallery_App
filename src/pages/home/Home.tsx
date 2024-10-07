import "../../App.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import Results from "./components/Results";
import axios from "axios";
import { quotes } from "./Static";
import "./Home.css";

const SearchBar: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (quotes.length > 0) {
      // Check if quotes array is not empty
      const number = Math.floor(Math.random() * quotes.length); // Use quotes.length
      setQuote(quotes[number]?.quote || "");
      setAuthor(quotes[number]?.author || "");
    }
  }, []);

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    setButtonPressed(true);
    setLoading(true);
    const query = `https://images-api.nasa.gov/search?q=${searchInput}`;
    axios.get(query).then((res) => {
      setData(res.data.collection.items);
      setLoading(false);
      console.log(res.data.collection.items);
    });
  };

  const styledSearchInput = {
    width: "500px",
    textAlign: "center",
    height: "34px",
    marginTop: "1px",
  };

  const styledSubmitButton = {
    letterSpacing: "0.1rem",
    height: "34.5px",
    backgroundColor: "transparent",
    border: "1px solid gray",
  };

  const searchBarMain = {
    paddingTop: "2rem",
  };

  const body = {
    paddingTop: "6rem",
  };

  if (buttonPressed && loading) {
    return (
      <div className="body" style={body}>
        <div className="quotes-container">
          <p className="Quotes-Quote">{quote}</p>
          <p className="Quotes-Author">{author}</p>
          <SearchInput
            search={changeSearch}
            submit={submitSearch}
            searchBarStyle={searchBarMain}
            submitStyle={styledSubmitButton}
            searchInputStyle={styledSearchInput}
          />
        </div>
        <div>
          <img
            src={require("../../images/loadingHome.gif")}
            className="hl"
            alt="loading"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="body" style={body}>
      <div className="Quotes">
        <p>{quote}</p>
        <p>{author}</p>
        <SearchInput
          search={changeSearch}
          submit={submitSearch}
          searchBarStyle={searchBarMain}
          submitStyle={styledSubmitButton}
          searchInputStyle={styledSearchInput}
        />
      </div>
      <Results results={data} />
    </div>
  );
};

export default SearchBar;

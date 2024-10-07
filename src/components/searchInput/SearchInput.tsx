import "../../App.css";

const SearchInput = (props) => {
  return (
    <form action="" onSubmit={props.submit}>
      <div className="search-form" style={props.searchBarStyle}>
        <input
          type="text"
          className="searchbar"
          onChange={props.search}
          style={props.searchInputStyle}
        />
        <button
          type="submit"
          className="searchButton"
          style={props.submitStyle}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

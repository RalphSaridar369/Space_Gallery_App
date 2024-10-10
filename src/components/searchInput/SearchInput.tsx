import "../../App.css";
import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <form action="" onSubmit={props.submit}>
      <div className="search-bar">
        <input type="text" className="search-input" onChange={props.search} />
        <button
          type="submit"
          className="search-submit-button"
          style={props.submitStyle}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

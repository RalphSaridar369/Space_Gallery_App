import Item from "./Item";
import "../../../App.css";

const Results = (props) => {
  return (
    <div className="items-body">
      {props.results.map((item, i) => {
        return <Item key={i} item={item} />;
      })}
    </div>
  );
};

export default Results;

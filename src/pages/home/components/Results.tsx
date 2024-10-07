import Item from "./Item";
import "../../../App.css";

const Results = (props) => {
  return (
    <div className="BodyItems">
      {props.results.map((item, i) => {
        return <Item key={i} Media={item.data[0]} Details={item} />;
      })}
    </div>
  );
};

export default Results;

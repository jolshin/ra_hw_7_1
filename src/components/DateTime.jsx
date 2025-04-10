import withPretty from "./withPretty";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

export default withPretty(DateTime);

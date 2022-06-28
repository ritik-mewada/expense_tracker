import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // must add spance after "card "

  return <div className={classes}>{props.children}</div>;
};
export default Card;

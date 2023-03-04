import starImage from "../images/star1.png";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} className="cardImage1" />
        <div className="cardDescription">
          <img src={starImage} className="starImg" />
          <span>{props.rate}</span>
          <span className="gray">({props.rateCount}) - </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </>
  );
}

export default Card;

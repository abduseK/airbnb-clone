import groupImage from "../../public/images/Group77.png";

function Hero() {
  return (
    <section className="hero">
      <img src={groupImage} className="gpImg" />
      <h1 className="herohdr">Online Experiences</h1>
      <p className="heroMessage">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;

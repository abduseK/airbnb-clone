import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import firsImage from "./images/image1.png";
import secondImage from "./images/image2.png";
import thirdImage from "./images/image3.png";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="card-props">
        <Card rate="5.0" location="USA" rateCount="2" img={firsImage} />
        <Card
          rate="4.3"
          location="Addis Ababa"
          rateCount="5"
          img={secondImage}
        />
        <Card rate="2.0" location="Uzbekistan" rateCount="1" img={thirdImage} />
      </div>
    </>
  );
}

export default App;

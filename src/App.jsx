import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./CardData";

function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        rate={card.rate}
        location={card.location}
        rateCount={card.rateCount}
        img={card.img}
        price={card.price}
        title={card.title}
      />
    );
  });
  return (
    <>
      <Header />
      <Hero />
      <div className="card-props">{cardElements}</div>
    </>
  );
}

export default App;

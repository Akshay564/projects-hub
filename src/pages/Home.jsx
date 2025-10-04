import Card from "../components/Card";
import {
  Timer,
  Accordion,
  StarRating,
  GuessTheNumber,
} from "../lazyImports.js";

function Home() {
  const cards = [
    {
      title: "Timer",
      description: "A timer to help you focus on your work.",
      link: "/timer",
      onMouseEnter: () => Timer.preload(),
    },
    {
      title: "Accordion",
      description: "A simple accordion to help you manage your tasks.",
      link: "/accordion",
      onMouseEnter: () => Accordion.preload(),
    },

    {
      title: "Star Rating",
      description: "A simple star rating to help you rate your tasks.",
      link: "/star-rating",
      onMouseEnter: () => StarRating.preload(),
    },
    {
      title: "Guess The Number",
      description: "A simple guess the number game.",
      link: "/guess-the-number",
      onMouseEnter: () => GuessTheNumber.preload(),
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:w-10/12 lg:w-8/12 m-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Welcome to the Home Page</h1>
        <p className="italic">
          This is a simple home page with a list of cards. Click on a card to
          navigate to the corresponding page.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card onMouseEnter={card.onMouseEnter} key={card.link} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;

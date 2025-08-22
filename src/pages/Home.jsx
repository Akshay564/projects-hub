import Card from "../components/Card";

function Home() {
  const cards = [
    {
      title: "Timer",
      description: "A timer to help you focus on your work.",
      link: "/timer",
      onMouseEnter: () => {
        import("./timer.jsx");
      },
    },
    {
      title: "Accordion",
      description: "A simple accordion to help you manage your tasks.",
      link: "/accordion",
      onMouseEnter: () => {
        import("./Accordion.jsx");
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Welcome to the Home Page</h1>
        <p className="italic">
          This is a simple home page with a list of cards. Click on a card to
          navigate to the corresponding page.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {cards.map((card) => (
          <Card onMouseEnter={card.onMouseEnter} key={card.link} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;

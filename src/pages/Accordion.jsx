import { useState } from "react";

function Accordion() {
  const facts = [
    {
      id: 1,
      title: "What is the tallest mountain in the world?",
      content:
        "Mount Everest, standing at 8,848.86 meters (29,031.7 feet) above sea level",
      showContent: false,
    },
    {
      id: 2,
      title: "Which planet has the most moons?",
      content: "As of 2025, Saturn holds the record with 145 confirmed moons",
      showContent: false,
    },
    {
      id: 3,
      title: "What is the only letter not used in any U.S. state name?",
      content: "The letter Q",
      showContent: false,
    },
    {
      id: 4,
      title: "Who invented the World Wide Web?",
      content: "Tim Berners-Lee in 1989",
      showContent: false,
    },
    {
      id: 5,
      title: "How many hearts does an octopus have?",
      content:
        "Three — two pump blood to the gills, one to the rest of the body",
      showContent: false,
    },
  ];

  const [showMultiple, setShowMultiple] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);

  function handleAccordion(id) {
    setOpenIndexes((prev) => {
      if (showMultiple) {
        return prev.includes(id)
          ? prev.filter((index) => index !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  }

  return (
    <div>
      <div className="text-2xl mb-2 font-bold">Facts</div>
      <div className="flex gap-2 mb-2">
        <input
          type="checkbox"
          checked={showMultiple}
          onChange={(e) => {
            setShowMultiple(e.target.checked);
            setOpenIndexes([]);
          }}
        />
        <label>Open Multiple Accordions at a time</label>
      </div>
      {facts.map((fact) => {
        return (
          <AccordionCard
            key={fact.id}
            content={fact.content}
            title={fact.title}
            isOpen={openIndexes.includes(fact.id)}
            handleAccordion={handleAccordion}
            id={fact.id}
          ></AccordionCard>
        );
      })}
    </div>
  );
}

function AccordionCard({ content, title, isOpen, handleAccordion, id }) {
  return (
    <div
      onClick={() => handleAccordion(id)}
      className="bg-gray-100 p-4 mb-4 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between">
        <div className="text-lg font-bold">{title}</div>
        <div
          className={`${
            isOpen ? "rotate-[-90deg]" : "rotate-[90deg]"
          } transition-transform`}
        >
          ▶
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "mt-2" : "max-h-0"
        }`}
      >
        {isOpen && <div className="mt-2">{content}</div>}
      </div>
    </div>
  );
}

export default Accordion;

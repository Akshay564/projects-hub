import { Link } from "react-router-dom";

function Card({ title, description, link, onMouseEnter }) {
  return (
    <div className="w-64 h-40 rounded-lg bg-gray-200 p-4 flex flex-col justify-between hover:bg-gray-300 hover:scale-105 transition-all duration-300">
      <Link
        onMouseEnter={onMouseEnter}
        to={link}
        className="!text-black h-full"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm mt-2 italic">{description}</p>
      </Link>
    </div>
  );
}

export default Card;

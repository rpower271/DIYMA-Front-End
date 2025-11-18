import { Link } from "react-router";

function Idea({ idea }) {
  return (
    <li className="flex justify-between items-center border-white rounded-xl shadow-md p-4 mb-6 bg-white w-full max-w-4xl">
      <div className="flex flex-col hover:text-blue-600">
        <Link to={`/ideas/${idea.id}`}>
          <h2 className="text-2xl font-bold text-black-800">{idea.title}</h2>
        </Link>
        <Link to={`/ideas/${idea.id}`}>
          {" "}
          <p className=" font-semibold text-blue-500 mt-1">
            {idea.description}
          </p>
        </Link>
      </div>

      <img
        className="w-30 h-30 object-cover rounded-lg ml-20"
        src={idea.coverimage}
        alt={idea.title}
      />
    </li>
  );
}

export default Idea;

//padding -> p-3, margin -> m-3

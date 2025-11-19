import { listOfIdeas } from "../../../listOfIdeas";
import { useParams } from "react-router";

function IdeasDetails() {
  const { id } = useParams();
  const idea = listOfIdeas.find((i) => i.id.toString() === id);

  if (!idea) {
    return <p>Idea not found.</p>;
  }

  return (
    <article className="min-h-screen flex flex-col max-w-6xl mx-auto p-10">
      <div className="bg-gray-100 rounded-3xl p-10 space-y-10 shadow-inner">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex items-center justify-center">
            <img
              src={idea.coverimage}
              alt={idea.title}
              className="w-full rounded-2xl shadow"
            />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <h1 className="text-4xl font-bold">{idea.title}</h1>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                {idea.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white rounded-3xl p-6 shadow-md text-center">
            <p className="font-semibold text-xl text-gray-900 mb-2">
              Price Range
            </p>
            <p className="text-gray-700">{idea.pricerange}</p>
          </div>

          <div className="flex-1 bg-white rounded-3xl p-6 shadow-md text-center">
            <p className="font-semibold text-xl text-gray-900 mb-2">
              Timeframe
            </p>
            <p className="text-gray-700">{idea.timeframe}</p>
          </div>

          <div className="flex-1 bg-white rounded-3xl p-6 shadow-md text-center">
            <p className="font-semibold text-xl text-gray-900 mb-2">
              Materials
            </p>
            <p className="text-gray-700">{idea.materials.join(", ")}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default IdeasDetails;

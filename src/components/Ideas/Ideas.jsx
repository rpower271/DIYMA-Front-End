import { listOfIdeas } from "../../../listOfIdeas";
import Idea from "../Idea/idea";

function Ideas() {
  return (
    <div className="flex flex-col items-center py-8 px-4 min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold mb-9">Ideas Page</h1>

      <ul className="flex flex-col items-center w-full">
        {listOfIdeas.map((idea) => (
          <Idea key={idea.id} idea={idea} />
        ))}
      </ul>
    </div>
  );
}

export default Ideas;

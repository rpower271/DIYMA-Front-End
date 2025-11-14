import { listOfIdeas } from "../../../listOfIdeas";
import Idea from "../Idea/idea";

function Ideas() {
  return (
    <div className="flex flex-col items-center py-8 px-4 min-h-screen ">
      <h1 className="bg-white text-5xl font-bold mb-9  rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
        Ideas Page
      </h1>

      <ul className="flex flex-col items-center w-full">
        {listOfIdeas.map((idea) => (
          <Idea key={idea.id} idea={idea} />
        ))}
      </ul>
    </div>
  );
}

export default Ideas;

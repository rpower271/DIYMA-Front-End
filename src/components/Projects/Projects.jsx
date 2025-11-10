import { listOfProjects } from "../../../listOfProjects";
import Project from "../Project/Project";

function Projects() {
  return (
    <div className="flex flex-col items-center py-8 px-4 min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold mb-9">Ideas Page</h1>

      <ul className="flex flex-col items-center w-full">
        {listOfProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;

function Project({ project }) {
  return (
    <li className="flex justify-between items-center border rounded-xl shadow-md p-4 mb-6 bg-white w-full max-w-2xl">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-black-800">{project.title}</h2>
        <p className="text-green-700 mt-1">{project.description}</p>
      </div>

      <img
        className="w-30 h-30 object-cover rounded-lg ml-20"
        src={project.coverimage}
        alt={project.title}
      />
    </li>
  );
}

export default Project;

//padding -> p-3, margin -> m-3

import { useState } from "react";

function ActiveProjectsCard({ projects, onStatusChange, onEditProject }) {
  const [expandedId, setExpandedId] = useState(null);

  function toggleExpand(projectId) {
    setExpandedId(expandedId === projectId ? null : projectId);
  }

  return (
    <div className="border-2 border-amber-50 shadow-md bg-amber-50 p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-slate-800">Active projects</h3>
        <h3 className="text-xl font-bold text-slate-800">Status</h3>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="border border-stone-300 shadow-md mb-2"
        >
          <div className="flex justify-between items-center p-3 bg-stone-300">
            <button
              onClick={() => toggleExpand(project.id)}
              className="flex-1 text-left font-semibold text-slate-900 hover:text-slate-600 transition flex items-center gap-2"
            >
              <span className="text-sm">
                {expandedId === project.id ? "▼" : "▶"} {project.title}
              </span>
            </button>
            <button
              onClick={() => onStatusChange(project.id)}
              className="bg-blue-500 border border-blue-500 shadow-md text-white px-4 py-1 ml-4 hover:bg-slate-800 hover:text-white transition"
            >
              {project.projectStatus}
            </button>
          </div>

          {/* Expanded details */}
          {expandedId === project.id && (
            <div className="p-4 border-t border-slate-800 shadow-md bg-white">
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Description:</strong>{" "}
                {project.description}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Total Cost:</strong> $
                {project.cost}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Due Date:</strong>{" "}
                {project.time_frame}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Items Needed:</strong>{" "}
                {project.items}
              </p>
              <button
                onClick={() => onEditProject(project.id)}
                className="bg-blue-500 border-2 rounded-xl shadow-md border-blue-500 text-white px-6 py-2 hover:bg-slate-800 hover:text-white transition"
              >
                Edit Project
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ActiveProjectsCard;

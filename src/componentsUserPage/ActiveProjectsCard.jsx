import { useState } from "react";

function ActiveProjectsCard({ projects, onStatusChange, onEditProject }) {
  const [expandedId, setExpandedId] = useState(null);

  function toggleExpand(projectId) {
    setExpandedId(expandedId === projectId ? null : projectId);
  }

  return (
    <div className="border-2 border-slate-800 bg-white p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-slate-800">Active projects</h3>
        <h3 className="text-xl font-bold text-slate-800">Status</h3>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="border border-slate-800 mb-2">
          <div className="flex justify-between items-center p-3 bg-amber-50">
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
              className="border border-slate-800 text-slate-800 px-4 py-1 ml-4 hover:bg-slate-800 hover:text-white transition"
            >
              {project.status}
            </button>
          </div>

          {/* Expanded details */}
          {expandedId === project.id && (
            <div className="p-4 border-t border-slate-800 bg-white">
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Description:</strong>{" "}
                {project.description}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Total Cost:</strong> $
                {project.totalCost}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Due Date:</strong>{" "}
                {project.plannedDueDate}
              </p>
              <p className="mb-2 text-slate-900">
                <strong className="text-slate-800">Items Needed:</strong>{" "}
                {project.itemsNeeded}
              </p>
              <button
                onClick={() => onEditProject(project.id)}
                className="border-2 border-slate-800 text-slate-800 px-6 py-2 hover:bg-slate-800 hover:text-white transition"
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

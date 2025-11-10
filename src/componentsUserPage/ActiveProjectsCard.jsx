import React from "react";

function ActiveProjectsCard({ projects, onStatusChange }) {
  return (
    <div className="border-2 border-black p-6 mb-6">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold">Active projects</h3>
        <h3 className="text-xl font-bold">Status</h3>
      </div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex justify-between items-center border border-black p-3 mb-2"
        >
          <span>{project.name}</span>{" "}
          <button
            onClick={() => onStatusChange(project.id)}
            className="border border-black px-4 py-1"
          >
            {project.status}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ActiveProjectsCard;

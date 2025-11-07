import React from "react";

function ActiveProjectsCard({ projects, onStatusChange }) {
  return (
    <div>
      <div>
        <h3>Active Projects</h3>
        <h3>Status</h3>
      </div>
      {projects.map((project) => (
        <div key={project.id}>
          <span>{project.name}</span>{" "}
          <button onClick={() => onStatusChange(project.id)}>
            {project.status}
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default ActiveProjectsCard;

import { useState } from "react";

export default function DeleteProjectCard({ projects, onDelete, onCancel }) {
  const [selectedProjectId, setSelectedProjectId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedProjectId) {
      alert("Please select a project to delete");
      return;
    }

    // Confirm deletion
    const projectToDelete = projects.find(
      (p) => p.id === parseInt(selectedProjectId)
    );
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${projectToDelete.title}"? This action cannot be undone.`
    );

    if (confirmDelete) {
      onDelete(selectedProjectId);
    }
  }

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-stone-300 border-2 rounded-xl  shadow-md border-slate-800 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Delete Project
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900">
              Select project to delete:
            </label>
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="bg-white w-full border-2 border-slate-800 p-2"
            >
              <option value="">-- Choose a project --</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-blue-500 flex-1 border-2 shadow-md rounded-xl border-blue-500 text-white  p-2 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 flex-1 border-2 shadow-md rounded-xl border-blue-500 text-white p-2 font-semibold hover:bg-slate-800 hover:text-white transition"
            >
              Delete Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

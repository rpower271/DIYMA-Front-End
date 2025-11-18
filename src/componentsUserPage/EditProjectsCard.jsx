import { useState } from "react";

function EditProjectsCard({ project, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    cost: project.totalCost,
    time_frame: project.time_frame,
    items: project.items,
    projectStatus: project.status,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a project title");
      return;
    }

    if (!formData.plannedDueDate) {
      alert("Please select a due date");
      return;
    }
    onSave(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-stone-300 border-2 shadow-md rounded-xl border-slate-800 p-8 w-full max-w-2xl my-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Edit Project</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Project Title:
            </label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="bg-white block w-full border-2 border-slate-800 p-2"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows="4"
              className=" bg-white block w-full border-2 border-slate-800 p-2 resize-none"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className=" block mb-2 font-semibold text-slate-900">
                Total Cost of Items:
              </label>
              <input
                name="totalCost"
                type="number"
                step="0.01"
                min="0"
                value={formData.totalCost}
                onChange={handleChange}
                placeholder="0.00"
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-semibold text-slate-900">
                Planned Due Date:
              </label>
              <input
                name="plannedDueDate"
                type="date"
                value={formData.plannedDueDate}
                onChange={handleChange}
                className="bg-white block w-full border-2 border-slate-800 p-2"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Items Needed:
            </label>
            <textarea
              name="itemsNeeded"
              value={formData.itemsNeeded}
              onChange={handleChange}
              placeholder="List items needed for this project..."
              rows="4"
              className="bg-white block w-full border-2 border-slate-800 p-2 resize-none"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900">
              Status:
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="bg-white block w-full border-2 border-slate-800 p-2"
              style={{ maxWidth: "100%" }}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-blue-500 flex-1 border-2 rounded-xl border-blue-500  text-white p-2 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 flex-1 border-2 rounded-xl border-blue-500 shadow-md text-white p-2 font-semibold hover:bg-slate-800 hover:text-white transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProjectsCard;

import { useState } from "react";

function CreateProjectCard({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    totalCost: "",
    plannedDueDate: "",
    itemsNeeded: "",
    projectStatus: "Not Started",
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-2 border-black p-8 w-full max-w-2xl my-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Create New Project
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Project Title:{" "}
            </label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              project="enter project title"
              className="w-full border-2 border-slate-800 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Description:{" "}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows="4"
              className="w-full border-2 border-slate-800 p-2 resize-none"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-slate-900">
                Total Cost of Items:{" "}
              </label>
              <input
                name="totalCost"
                type="number"
                step="0.01"
                min="0"
                value={formData.totalCost}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full border-2 border-slate-800 p-2"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-slate-900">
                Planned Due Date:{" "}
              </label>
              <input
                name="plannedDueDate"
                type="date"
                value={formData.plannedDueDate}
                onChange={handleChange}
                className="w-full border-2 border-slate-800 p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Items Needed:{" "}
            </label>
            <textarea
              name="itemsNeeded"
              value={formData.itemsNeeded}
              onChange={handleChange}
              placeholder="List items needed for this project..."
              rows="4"
              className="w-full border-2 border-slate-800 p-2 resize-none"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900">
              Initial Status:
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border-2 border-slate-800 p-2"
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
              className="flex-1 border-2 border-slate-800 text-slate-800 p-2 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 border-2 border-slate-800 text-slate-800 p-2 font-semibold hover:bg-slate-800 hover:text-white transition"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectCard;

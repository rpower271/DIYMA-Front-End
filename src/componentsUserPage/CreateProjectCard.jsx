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
    <div>
      <div>
        <h2>Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Project Title:</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              project="enter project title"
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows="4"
            />
          </div>
          <div>
            <label>Total Cost of Items:</label>
            <input
              name="totalCost"
              type="number"
              step="0.01"
              min="0"
              value={formData.totalCost}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>
          <div>
            <label>Planned Due Date:</label>
            <input
              name="plannedDueDate"
              type="date"
              value={formData.plannedDueDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Items Needed:</label>
            <textarea
              name="itemsNeeded"
              value={formData.itemsNeeded}
              onChange={handleChange}
              placeholder="List items needed for this project..."
              rows="4"
            />
          </div>
          <div>
            <label>Initial Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Create Project</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectCard;

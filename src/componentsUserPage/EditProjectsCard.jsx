import { useState } from "react";

function EditProjectsCard({ projects, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: projects.title,
    description: project.description,
    totalCost: project.totalCost,
    plannedDueDate: project.plannedDueDate,
    itemsNeeded: project.itemsNeeded,
    status: project.status,
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

  return <div>EditProjectsCard</div>;
}

export default EditProjectsCard;

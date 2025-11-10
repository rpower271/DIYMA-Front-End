import {useState} from 'react'

function CreateProjectCard({onSave, onCancel}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        totalCost: "",
        plannedDueDate: "",
        itemsNeeded: "",
        projectStatus: "Not Started"
    });

    function handleSubmit(e){
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Please enter a project title");
            return;
        }

        if (!formData.plannedDueDate) {
            alert("Please select a due date")
            return;
        }
        onSave(formData);
    }
  return (
    <div>CreateProjectCard</div>
  )
}

export default CreateProjectCard
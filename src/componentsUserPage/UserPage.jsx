import React, { useState } from "react";
import EditAccountForm from "./EditAccountForm";
import AvatarCard from "./AvatarCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ActiveProjectsCard from "./ActiveProjectsCard";
import ShareProjectsCard from "./ShareProjectsCard";
import CreateProjectCard from "./CreateProjectCard";
import DeleteProjectCard from "./DeleteProjectCard";
import EditProjectCard from "./EditProjectsCard";

const initialUser = {
  name: "Diyma User",
  username: "diyma_user",
  email: "diyma_user@fake.com",
  phoneNumber: "555-555-5555",
  avatar: null,
};

const initialProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Build a treehouse",
    totalCost: "500",
    plannedDueDate: "2025-12-31",
    itemsNeeded: "Wood, nails, screws, paint",
    status: "Not Started",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Create a garden",
    totalCost: "200",
    plannedDueDate: "2025-11-15",
    itemsNeeded: "Seeds, soil, tools, fence",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Renovate kitchen",
    totalCost: "3000",
    plannedDueDate: "2025-10-01",
    itemsNeeded: "Cabinets, counters, appliances",
    status: "Completed",
  },
];

function UserPage() {
  const [user, setUser] = useState(initialUser);
  const [projects, setProjects] = useState(initialProjects);
  const [editAccount, setEditAccount] = useState(false);
  const [createProject, setCreateProject] = useState(false);
  const [deleteProject, setDeleteProject] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const projectsAdded = projects.length;

  function handleEditAccount() {
    setEditAccount(true);
  }

  function handleSaveAccount(updatedInfo) {
    setUser((prev) => ({
      ...prev,
      ...updatedInfo,
    }));
    setEditAccount(false);
  }

  function handleCancelEdit() {
    setEditAccount(false);
  }

  function handleAvatarChange(imageUrl) {
    setUser((prev) => ({
      ...prev,
      avatar: imageUrl,
    }));
  }

  function handleCreateProject() {
    setCreateProject(true);
  }

  function handleSaveProject(projectData) {
    const newId =
      projects.length > 0
        ? Math.max(...projects.map((project) => project.id)) + 1
        : 1;

    const newProject = {
      id: newId,
      title: projectData.title,
      description: projectData.description,
      totalCost: projectData.totalCost,
      plannedDueDate: projectData.plannedDueDate,
      itemsNeeded: projectData.itemsNeeded,
      status: projectData.status,
    };

    setProjects((prev) => [...prev, newProject]);
    setCreateProject(false);
  }

  function handleCancelCreate() {
    setCreateProject(false);
  }

  function handleDeleteProject() {
    setDeleteProject(true);
  }

  function handleConfirmDelete(projectId) {
    setProjects((prev) =>
      prev.filter((project) => project.id !== parseInt(projectId))
    );
    setDeleteProject(false);
  }

  function handleCancelDelete() {
    setDeleteProject(false);
  }

  function handleEditProject(projectId) {
    setEditProject(projectId);
  }

  function handleSaveEditProject(updateData) {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === editProject ? { ...project, ...updateData } : project
      )
    );
    setEditProject(null);
  }

  function handleCancelEditProject() {
    setEditProject(null);
  }

  function handleStatusChange(projectId) {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.id === projectId) {
          let newStatus;
          if (project.status === "Not Started") {
            newStatus = "In Progress";
          } else if (project.status === "In Progress") {
            newStatus = "Completed";
          } else if (project.status === "Completed") {
            newStatus = "On Hold";
          } else {
            newStatus = "Not Started";
          }
          return { ...project, status: newStatus };
        }
        return project;
      })
    );
  }
  const projectToEdit = editProject
    ? projects.find((project) => project.id === editProject)
    : null;

  return (
    <div className="min-h-screen  flex flex-col ">
      <h1 className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-5xl mx-auto p-6">
        User page
      </h1>

      <div className="bg-white border-2 rounded-2xl border-stone-300 shadow-md p-6 mb-6 max-w-7xl mx-auto px-10 w-full mt-2">
        <div className="flex gap-6 mb-6 mt-6 items-center">
          <AvatarCard
            user={user}
            onEditAccount={handleEditAccount}
            onAvatarChange={handleAvatarChange}
          />

          <ProfileInfoCard user={user} projectsAdded={projectsAdded} />
          <div className="flex-1 flex items-center justify-center pl-8">
            <p className="text-5xl font-bold text-black text-center">
              Welcome,
              <br />
              {user.name}
            </p>
          </div>
        </div>

        <div className="flex gap-6 mb-6">
          <button
            onClick={handleCreateProject}
            className="bg-blue-500 flex-1 border-2 rounded-2xl shadow-md border-blue-500 text-white p-12 text-xl font-semibold hover:bg-slate-800 hover:text-white transition"
          >
            Create project
          </button>
          <button
            onClick={handleDeleteProject}
            className="bg-blue-500 flex-1 border-2 rounded-2xl shadow-md border-blue-500 text-white p-12 text-xl font-semibold hover:bg-slate-800 hover:text-white transition"
          >
            Delete project
          </button>
        </div>

        <ActiveProjectsCard
          projects={projects}
          onStatusChange={handleStatusChange}
          onEditProject={handleEditProject}
        />

        <ShareProjectsCard projects={projects} />
      </div>

      {editAccount && (
        <EditAccountForm
          user={user}
          onSave={handleSaveAccount}
          onCancel={handleCancelEdit}
        />
      )}

      {createProject && (
        <CreateProjectCard
          onSave={handleSaveProject}
          onCancel={handleCancelCreate}
        />
      )}
      {deleteProject && (
        <DeleteProjectCard
          projects={projects}
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {editProject && projectToEdit && (
        <EditProjectCard
          project={projectToEdit}
          onSave={handleSaveEditProject}
          onCancel={handleCancelEditProject}
        />
      )}
    </div>
  );
}

export default UserPage;

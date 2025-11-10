import React, { useState } from "react";
import EditAccountForm from "./EditAccountForm";
import AvatarCard from "./AvatarCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ActiveProjectsCard from "./ActiveProjectsCard";
import ShareProjectsCard from "./ShareProjectsCard";
import CreateProjectCard from "./CreateProjectCard";

const initialUser = {
  username: "diyma_user",
  email: "diyma_user@fake.com",
  phoneNumber: "555-555-5555",
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

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center py-6">User page</h1>

      <div className="border-2 border-black p-4 mb-6">Nav Bar</div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex gap-6 mb-6">
          <AvatarCard user={user} onEditAccount={handleEditAccount} />

          <div>
            <ProfileInfoCard user={user} projectsAdded={projectsAdded} />
          </div>
        </div>

        <div className="flex gap-6 mb-6">
          <button
            onClick={handleCreateProject}
            className="flex-1 border-2 border-black p-12 text-xl font-semibold"
          >
            Create project
          </button>
          <button className="flex-1 border-2 border-black p-12 text-xl font-semibold">
            Delete project
          </button>
        </div>

        <ActiveProjectsCard
          projects={projects}
          onStatusChange={handleStatusChange}
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
      <div className="border-2 border-black p-4 mt-auto">Footer</div>
    </div>
  );
}

export default UserPage;

import React, { useState } from "react";
import EditAccountForm from "./EditAccountForm";
import AvatarCard from "./AvatarCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ActiveProjectsCard from "./ActiveProjectsCard";

const initialUser = {
  username: "diyma_user",
  email: "diyma_user@fake.com",
  phoneNumber: "555-555-5555",
};

const initialProjects = [
  { id: 1, projectname: "Project A", status: "in Progress" },
  { id: 1, projectname: "Project B", status: "in Progress" },
];

function UserPage() {
  const [user, setUser] = useState(initialUser);
  const [projects, setProjects] = useState(initialProjects);
  const [editAccount, setEditAccount] = useState(false);
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

  function handleStatusChange(projectId) {
    setProjects((prev) =>
      prev.map((project) => {
        if (projects.id === projectId) {
          let newStatus;
          if (project.status === "Not Started") {
            newStatus = "In Progress";
          } else if (project.status === "In Progress") {
            newStatus = "Completed";
          } else if (project.status === "Completed") {
            newStatus = "On Hold";
          }
          return { ...project, status: newStatus };
        }
        return project;
      })
    );
  }

  return (
    <div>
      <h1>User page</h1>

      <div>Nav Bar</div>

      <div>
        <AvatarCard user={user} onEditAccount={handleEditAccount} />

        <div>
          <ProfileInfoCard user={user} projectsAdded={projectsAdded} />
        </div>
      </div>

      <div>
        <button>Create project</button>
        <button>Delete project</button>
      </div>

      <ActiveProjectsCard
        projects={projects}
        onStatusChange={handleStatusChange}
      />

      <div>Share your project</div>

      <div>Footer</div>

      {editAccount && (
        <EditAccountForm
          user={user}
          onSave={handleSaveAccount}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default UserPage;

import React, { useState } from "react";
import EditAccountForm from "./EditAccountForm";
import AvatarCard from "./AvatarCard";

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

  return (
    <div>
      <h1>User page</h1>

      <div>Nav Bar</div>

      <div>
        <div>
          <div>Avatar</div>
          <button onClick={handleEditAccount}>Edit account</button>
        </div>

        <div>
          <h3>Profile info</h3>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone number:</strong> {user.phoneNumber}
          </p>
          <p>
            <strong>Project count:</strong> {projectsAdded}
          </p>
        </div>
      </div>

      <div>
        <button>Create project</button>
        <button>Delete project</button>
      </div>

      <div>
        <div>
          <h3>Active projects</h3>
          <h3>Status</h3>
        </div>
        {projects.map((project) => (
          <div key={project.id}>
            <span>{project.name}</span>
            <button>{project.status}</button>
          </div>
        ))}
      </div>

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

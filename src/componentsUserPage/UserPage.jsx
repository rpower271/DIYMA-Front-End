import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import EditAccountForm from "./EditAccountForm";
import AvatarCard from "./AvatarCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ActiveProjectsCard from "./ActiveProjectsCard";
import ShareProjectsCard from "./ShareProjectsCard";
import CreateProjectCard from "./CreateProjectCard";
import DeleteProjectCard from "./DeleteProjectCard";
import EditProjectCard from "./EditProjectsCard";
import { useAuth } from "../components/Auth/AuthContext";
import { useApi } from "../components/Api/ApiContext";

function UserPage() {
  const { token, logout } = useAuth();
  const { request } = useApi();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editAccount, setEditAccount] = useState(false);
  const [createProject, setCreateProject] = useState(false);
  const [deleteProject, setDeleteProject] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectsAdded = projects.length;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        console.log("Fetching user data with token:", token);
        const userData = await request("/users/me", { method: "GET" });
        console.log("User data received:", userData);
        setUser(userData);

        console.log("Fetching projects...");
        const projectsData = await request("/users/projects", {
          method: "GET",
        });
        console.log("Projects data received:", projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);

        if (
          error.message.includes("401") ||
          error.message.includes("unauthorized")
        ) {
          logout();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate, logout, request]);

  function handleEditAccount() {
    setEditAccount(true);
  }

  async function handleSaveAccount(updatedInfo) {
    try {
      const updatedUser = await request(`/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedInfo),
      });

      setUser(updatedUser);
      setEditAccount(false);
    } catch (error) {
      console.error("Error updating account:", error);
      alert(`Failed to update account: ${error.message}`);
    }
  }

  function handleCancelEdit() {
    setEditAccount(false);
  }

  async function handleAvatarChange(imageUrl) {
    try {
      const updatedUser = await request(`/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({ avatar: imageUrl }),
      });

      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating avatar:", error);
      alert(`Failed to update avatar: ${error.message}`);
    }
  }

  function handleCreateProject() {
    setCreateProject(true);
  }

  async function handleSaveProject(projectData) {
    try {
      const newProject = await request("/users/projects", {
        method: "POST",
        body: JSON.stringify(projectData),
      });

      setProjects((prev) => [...prev, newProject]);
      setCreateProject(false);
    } catch (error) {
      console.error("Error creating project:", error);
      alert(`Failed to create project: ${error.message}`);
    }
  }

  function handleCancelCreate() {
    setCreateProject(false);
  }

  function handleDeleteProject() {
    setDeleteProject(true);
  }

  async function handleConfirmDelete(projectId) {
    try {
      await request(`/users/projects/${projectId}`, {
        method: "DELETE",
      });

      setProjects((prev) =>
        prev.filter((project) => project.id !== parseInt(projectId))
      );
      setDeleteProject(false);
    } catch (error) {
      console.error("Error deleting project:", error);
      alert(`Failed to delete project: ${error.message}`);
    }
  }

  function handleCancelDelete() {
    setDeleteProject(false);
  }

  function handleEditProject(projectId) {
    setEditProject(projectId);
  }

  async function handleSaveEditProject(updateData) {
    try {
      const updatedProject = await request(`/users/projects/${editProject}`, {
        method: "PUT",
        body: JSON.stringify(updateData),
      });

      setProjects((prev) =>
        prev.map((project) =>
          project.id === editProject ? updatedProject : project
        )
      );
      setEditProject(null);
    } catch (error) {
      console.error("Error updating project:", error);
      alert(`Failed to update project: ${error.message}`);
    }
  }

  function handleCancelEditProject() {
    setEditProject(null);
  }

  async function handleStatusChange(projectId) {
    try {
      const project = projects.find((project) => project.id === projectId);

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

      await request(`/users/projects/${projectId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });

      setProjects((prev) =>
        prev.map((project) =>
          project.id === projectId ? { ...project, status: newStatus } : project
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert(`Failed to update status: ${error.message}`);
    }
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
              {user?.name || "Guest"}
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

        {error && (
          <div className="border-2 border-red-500 bg-red-100 p-4 mb-6 rounded">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

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

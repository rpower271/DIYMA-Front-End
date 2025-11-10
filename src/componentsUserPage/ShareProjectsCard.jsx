import { useState } from "react";

function ShareProjectsCard({ projects }) {
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);

  async function handleShare() {
    if (!selectedProjectId) {
      alert("Please select a project to share");
      return;
    }
    const projectLink = `${window.location.origin}/project/${selectedProjectId}`;
    try {
      await navigator.clipboard.writeText(projectLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    } catch (error) {
      console.error("failed to copy link:", error);
      alert("failed to copy link");
    }
  }
  return (
    <div className="border-2 border-black p-8 text-center mb-6">
      <h3 className="text-xl font-bold mb-4">Share your project</h3>
      <div className="mb-4">
        <label className="block mb-2">Select a project:</label>
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="border border-black p-2 w-full max-w-md"
        >
          <option value="">-- Choose a project --</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleShare} className="border-2 border-black px-6 py-2">
        {linkCopied ? "Link Copied!" : "Copy Share Link"}
      </button>
      {linkCopied && (
        <p className="mt-2 font-semibold">Link copied to clipboard!</p>
      )}
    </div>
  );
}

export default ShareProjectsCard;

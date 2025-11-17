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
    <div className="bg-amber-50 border-2 shadow-md border-amber-50 p-8 text-center mb-6">
      <h3 className="text-xl font-bold mb-4 text-slate-800">
        Share your project
      </h3>
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-slate-900">
          Select a project:
        </label>
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="bg-stone-300 border-2 shadow-md border-stone-300 p-2 w-full max-w-md"
        >
          <option value="">-- Choose a project --</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleShare}
        className="bg-blue-500 border-2 rounded-xl shadow-md border-blue-500 text-white px-6 py-2 hover:bg-slate-800 hover:text-white transition"
      >
        {linkCopied ? "Link Copied!" : "Copy Share Link"}
      </button>
      {linkCopied && (
        <p className="mt-2 font-semibold text-blue-600">
          Link copied to clipboard!
        </p>
      )}
    </div>
  );
}

export default ShareProjectsCard;

import { useState } from "react";
import useMutation from "../Api/UseMutation";

function NewThreadForm({ currentUser, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    mutate: createThread,
    loading: submitting,
    error: threadError,
  } = useMutation("POST", "/threads", ["threads"]);

  const handleSubmit = async () => {
    if (title.trim() && content.trim()) {
      const success = await createThread({
        title,
        content,
        author: currentUser,
      });

      if (success) {
        setTitle("");
        setContent("");
        onCancel();
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">
      <h2 className="text-xl font-semibold mb-4">Create New Thread</h2>

      {threadError && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-3">
          {threadError}
        </div>
      )}

      <input
        type="text"
        placeholder="Thread title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xl mx-auto"
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={submitting}
        className="w-full p-3 border border-gray-300 rounded-lg mb-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          {submitting ? "Posting..." : "Post Thread"}
        </button>
        <button
          onClick={onCancel}
          disabled={submitting}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewThreadForm;

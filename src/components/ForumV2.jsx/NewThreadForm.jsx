import { useState } from "react";

function NewThreadForm({ onSubmit, onCancel, currentUser }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onSubmit({ title, content, author: currentUser });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="p-4 border border-gray-300 mb-4 bg-gray-50">
      <h3 className="font-bold mb-2">Create New Thread</h3>
      <div className="text-sm text-gray-600 mb-2">
        Posting as: {currentUser}
      </div>
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 mb-2"
      />
      <textarea
        placeholder="Thread content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 mb-2 h-24"
      />
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          Post Thread
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewThreadForm;

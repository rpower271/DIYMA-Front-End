import { useState } from "react";

function CreateNewThread({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title.trim && content.trim()) {
      onSubmit(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="createForum">
      <h2>Create New Thread</h2>
      <input
        type="text"
        placeholder="Thread title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=""
      />
      <textarea
        placeholder="what's on your mind"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className=""
      />
      <div className="">
        <button onClick={handleSubmit}>Post</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default CreateNewThread;

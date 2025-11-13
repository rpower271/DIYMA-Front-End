import { useState } from "react";

function ReplyForm({ onSubmit }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Write a reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className=""
      />
      <button onClick={handleSubmit} className="">
        Send
      </button>
    </div>
  );
}

export default ReplyForm;

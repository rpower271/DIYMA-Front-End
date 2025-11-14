import React from "react";

function ThreadView({ thread }) {
  if (!thread) {
    return (
      <div className="flex-1 p-4 text-gray-500">Select a thread to view</div>
    );
  }

  return (
    <div className="border border-gray-300 p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{thread.title}</h2>
      <div className="text-sm text-gray-600 mb-4">
        Posted by {thread.author}
      </div>
      <div className="text-gray-800">{thread.content}</div>
    </div>
  );
}

export default ThreadView;

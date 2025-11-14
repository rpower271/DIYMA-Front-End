import { useState } from "react";
import NewThreadForm from "./NewThreadForm";
import ThreadCard from "./ThreadCard";

function ForumPage() {
  const [threads, setThreads] = useState([]);

  const [showNewThread, setShowNewThread] = useState(false);
  const [currentUser] = useState("CurrentUser");

  const handleCreateThread = (title, content) => {
    const newThread = {
      id: threads.length + 1,
      title,
      author: currentUser,
      content,
      replies: [],
    };
    setThreads([newThread, ...threads]);
    setShowNewThread(false);
  };

  const handleAddReply = (threadId, content) => {
    setThreads(
      threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            replies: [
              ...thread.replies,
              {
                id: thread.replies.length + 1,
                author: currentUser,
                content,
              },
            ],
          };
        }
        return thread;
      })
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Community Forum
            </h1>
            <button
              onClick={() => setShowNewThread(!showNewThread)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {showNewThread ? "Cancel" : "New Thread"}
            </button>
          </div>
        </div>

        {showNewThread && (
          <NewThreadForm
            onSubmit={handleCreateThread}
            onCancel={() => setShowNewThread(false)}
          />
        )}
        <div className="space-y-4">
          {threads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              onAddReply={handleAddReply}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForumPage;

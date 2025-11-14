import { useState } from "react";
import NewThreadForm from "./NewThreadForm";
import ThreadCard from "./ThreadCard";
import SearchBar from "./SearchBar";

function ForumPage() {
  const [threads, setThreads] = useState([]);

  const [showNewThread, setShowNewThread] = useState(false);
  const [currentUser] = useState("CurrentUser");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredThreads = threads.filter((thread) =>
    thread.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              onAddReply={handleAddReply}
            />
          ))}
          {filteredThreads.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
              {searchTerm}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForumPage;

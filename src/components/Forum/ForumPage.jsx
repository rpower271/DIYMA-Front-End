import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import NewThreadForm from "./NewThreadForm";
import ThreadCard from "./ThreadCard";
import SearchBar from "./SearchBar";
import useQuery from "../Api/UseQuery";
import { Link } from "react-router";

function ForumPage() {
  const [showNewThread, setShowNewThread] = useState(false);
  const [currentUser] = useState("CurrentUser");
  const [searchTerm, setSearchTerm] = useState("");

  const { token } = useAuth();
  const isAuthenticated = !!token;

  const { data: threads, loading, error } = useQuery("/threads", "threads");

  const filteredThreads = threads
    ? threads.filter((thread) =>
        thread.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading threads...</div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="bg-red-100 text-red-700 p-6 rounded-lg">
  //         <h2 className="text-xl font-bold mb-2">Error Loading Forum</h2>
  //         <p>{error}</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen ">
      <div className="max-w-5xl mx-auto p-6">
        <div className=" bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Community Forum
            </h1>
            {isAuthenticated ? (
              <button
                onClick={() => setShowNewThread(!showNewThread)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                {showNewThread ? "Cancel" : "New Thread"}
              </button>
            ) : (
              <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg hover:text-blue-600">
                <Link to="/login">Log in to create threads</Link>
              </div>
            )}
          </div>
        </div>

        {isAuthenticated && showNewThread && (
          <NewThreadForm
            currentUser={currentUser}
            onCancel={() => setShowNewThread(false)}
          />
        )}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              currentUser={currentUser}
              isAuthenticated={isAuthenticated}
            />
          ))}
          {filteredThreads.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
              {searchTerm
                ? `No threads found matching "${searchTerm}"`
                : threads && threads.length === 0
                ? "No threads yet. Create one!"
                : "No threads found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForumPage;

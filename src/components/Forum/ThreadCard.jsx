import { useState } from "react";
import useMutation from "../Api/UseMutation";

function ThreadCard({ thread, currentUser, isAuthenticated }) {
  const [showReplies, setShowReplies] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const {
    mutate: createReply,
    loading: submitting,
    error: replyError,
  } = useMutation(`POST`, `/threads/${thread.id}/replies`, [`threads`]);

  const handleSubmitReply = async () => {
    if (replyContent.trim()) {
      const success = await createReply({
        content: replyContent,
        author: currentUser,
      });

      if (success) {
        setReplyContent("");
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 break-words whitespace-normal">
        {thread.title}
      </h2>
      <div className="flex items-center text-sm text-gray-600 mb-3">
        <span className="mr-1">👤</span>
        {thread.author}
      </div>
      <p className="text-gray-700 mb-4">{thread.content}</p>

      <button
        onClick={() => setShowReplies(!showReplies)}
        className="flex items-center text-gray-600 hover:text-blue-600 transition"
      >
        <span className="mr-1">💬</span>
        <span>{thread.replies.length} Replies</span>
      </button>

      {showReplies && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4">Replies</h3>
          <div className="space-y-4 mb-4">
            {thread.replies.map((reply) => (
              <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="mr-1">👤</span>
                  <span className="font-medium">{reply.author}</span>
                </div>
                <p className="text-gray-700">{reply.content}</p>
              </div>
            ))}
          </div>

          {replyError && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-3">
              {replyError}
            </div>
          )}

          {isAuthenticated ? (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Write a reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !submitting && handleSubmitReply()
                }
                disabled={submitting}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubmitReply}
                disabled={submitting}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                {submitting ? "..." : "➤"}
              </button>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg text-center">
              <Link to="/login">Please log in to reply to this thread.</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ThreadCard;

function ThreadList({ threads, onSelectThread, onNewThread }) {
  return (
    <div className="border-r border-gray-300 w-64 p-4">
      <button
        onClick={onNewThread}
        className="w-full bg-blue-600 text-white px-4 py-2 mb-4 hover:bg-blue-700"
      >
        New Thread
      </button>
      <div className="space-y-2">
        {threads.map((thread) => (
          <div
            key={thread.id}
            onClick={() => onSelectThread(thread.id)}
            className="p-2 border border-gray-300 cursor-pointer hover:bg-gray-100"
          >
            <div className="font-bold text-sm">{thread.title}</div>
            <div className="text-xs text-gray-600">{thread.user}</div>
            <div className="text-xs text-gray-500">
              {thread.replies.length} replies
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreadList;

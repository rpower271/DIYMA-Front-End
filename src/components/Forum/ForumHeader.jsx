

function ForumHeader( {onNewThread} ) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center">
        <h1>Community Forum</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onNewThread}
        >
          Create New Thread
        </button>
      </div>
    </div>
  );
}

export default ForumHeader;

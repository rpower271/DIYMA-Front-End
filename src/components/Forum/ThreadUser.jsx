const ThreadUser = ({ user }) => {

  return (
    <div className="flex items-center text-sm text-gray-600 space-x-4 mb-3">
      <span className="flex items-center">
        {user}
      </span>
    </div>
  );
};

export default ThreadUser
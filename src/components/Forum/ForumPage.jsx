import { useState } from "react";

function ForumPage() {
  const [threads, setThreads] = useState([{}]);
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [showNewThread, setShowNewThread] = useState(false);
  const [username, setUserName] = useState("CurrentUser");

  const handleCreateThread = (title, content) => {
    const newThread
  }

  return (
    <div className="">
      <div>
        <ForumHeader onNewThread={() => setShowNewThread(!showNewThread)} />
      </div>
    </div>
  );
}

export default ForumPage;

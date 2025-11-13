import React from 'react'
import ThreadCard from './ThreadCard'

function ThreadList( {threads, activeThreadId, onToggleReplies, onAddReply}) {
  return (
    <div>
        {threads.map((thread) => (
            <ThreadCard key={thread.id}
            thread={thread}
        ))}
    </div>
  )
}

export default ThreadList
import React from 'react'

function ThreadToggleAction({ replies, onToggleReplies, showReplies }) {

  return (
    <div className="">
        <button onClick={onToggleReplies} className="">
            <span>{replies} Replies</span>
        </button>
    </div>
  )
}

export default ThreadToggleAction
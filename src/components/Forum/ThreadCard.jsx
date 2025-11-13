import ReplySection from "./ReplySection";
import ThreadUser from "./ThreadUser";

function ThreadCard({ thread, isActive, onToggleReplies, onAddReply }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h2 className="">{thread.title}</h2>
          <ThreadUser user={thread.user} />
          <p className="">{thread.content}</p>
        </div>
      </div>
      <ThreadToggleAction
        replies={thread.replies}
        onToggleReplies={() => onToggleReplies(thread.id)}
        showReplies={isActive}
      />
      {isActive && (
        <ReplySection
          replies={thread.replyList}
          onAddReply={(content) => onAddReply(thread.id, content)}
        />
      )}
    </div>
  );
}

export default ThreadCard;

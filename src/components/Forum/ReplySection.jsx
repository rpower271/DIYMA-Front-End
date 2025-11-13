import SingleReplyItem from "./SingleReplyItem";
import ReplyForm from "./ReplyForm";

function ReplySection({ replies, onAddReply }) {
  return (
    <div className="">
      <h3 className="">Replies</h3>
      <div className="">
        {replies.map((reply) => (
          <SingleReplyItem key={reply.id} reply={reply} />
        ))}
      </div>
      <ReplyForm onSubmit={onAddReply} />
    </div>
  );
}

export default ReplySection;

//This Section/Component is designed to be able to see who is the user and what they posted

function SingleReplyItem({ reply }) {
  return (
    <div className="">
      <div className="">
        <span className="">{reply.user}</span>
      </div>
      <p className="">{reply.content}</p>
    </div>
  );
}

export default SingleReplyItem;

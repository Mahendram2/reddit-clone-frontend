function Comment({ comment, createdTime }) {
  return (
    <div className='comment'>
      <p>From: {comment.userId}</p>
      <span>{createdTime(comment.createdAt)}</span>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;

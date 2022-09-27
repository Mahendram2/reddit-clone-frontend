function Comment({ comment, createdTime }) {
  return (
    <div className='comment'>
      <p>{createdTime(comment.createdAt)}</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;

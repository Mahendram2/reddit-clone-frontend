function Comment({ comment, createdTime }) {
  return (
    <div className='comment'>
      <h3>"{comment.body}"</h3>
      <h4 className="created-by">{comment.userId} - <span>{createdTime(comment.createdAt)}</span></h4>
    </div>
  );
}

export default Comment;

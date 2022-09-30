import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Comment from '../components/Comment';
import Buttons from '../components/Buttons';

function Show({
  feed,
  deletePost,
  createComment,
  createdTime,
  user,
  updateCounter,
}) {
  const [newComment, setNewComment] = useState({
    body: '',
    userId: user ? user.displayName : '',
  });

  const { id } = useParams();
  const post = feed ? feed.find((p) => p._id === id) : null;

  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(post._id);
    navigate('/1');
  };

  const handleSubmit = (e) => {
    createComment(newComment, id);
    setNewComment({
      body: '',
      userId: 'test',
    });
  };

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const loading = () => {
    return <h1>Loading Post...</h1>;
  };

  const loaded = () => {
    return (
      <div className='show-post post'>
        <h1>{post.title}</h1>
        <br />
        <p>
          {post.createdBy} - <span>{createdTime(post.createdAt)}</span>
        </p>
        <br />
        <p>{post.content}</p>
        {user ? (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='body'
              value={newComment.body}
              onChange={handleChange}
            />
            <input type='submit' value='Comment' className='create-b' />
          </form>
        ) : (
          <p className='sign-in-to'>Sign in to leave a comment</p>
        )}
        {post.replies.map((comment) => (
          <Comment
            key={Math.random()}
            comment={comment}
            createdTime={createdTime}
            user={user}
          />
        ))}
        <ul>
          <li>
            <Buttons
              updateCounter={updateCounter}
              count={post.counter}
              postId={post._id}
            />
          </li>
          {user ? (
            <li>
              <button onClick={handleDelete} className='create-b'>
                Delete Post
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    );
  };

  return post ? loaded() : loading();
}

export default Show;

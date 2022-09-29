import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    navigate('/');
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

  console.log(post);

  const loading = () => {
    return <h1>Loading Post...</h1>;
  };

  const loaded = () => {
    return (
      <div className='show-post'>
        <Buttons
          updateCounter={updateCounter}
          count={post.counter}
          postId={post._id}
        />
        <p>Made by: {post.createdBy}</p>
        <span>{createdTime(post.createdAt)}</span>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='body'
            value={newComment.body}
            onChange={handleChange}
          />
          <input type='submit' value='Comment' />
        </form>
        {post.replies.map((comment) => (
          <Comment
            key={Math.random()}
            comment={comment}
            createdTime={createdTime}
            user={user}
          />
        ))}
        <button onClick={handleDelete}>Delete Post</button>
      </div>
    );
  };

  return post ? loaded() : loading();
}

export default Show;

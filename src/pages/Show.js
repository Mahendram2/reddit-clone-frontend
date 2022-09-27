import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Show({ feed, deletePost, createComment }) {
  const [newComment, setNewComment] = useState({ body: '', userID: '' });

  const { id } = useParams();
  const post = feed ? feed.find((p) => p._id === id) : null;

  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(post._id);
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(newComment, id);
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
        <p>Made by: {post.createdBy}</p>
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
        {post.replies.map((content) => (
          <p key={Math.random()}>{content.body}</p>
        ))}
        <button onClick={handleDelete}>Delete Post</button>
      </div>
    );
  };

  return post ? loaded() : loading();
}

export default Show;

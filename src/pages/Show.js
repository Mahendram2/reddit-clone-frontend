import { useParams, useNavigate } from 'react-router-dom';

function Show({ feed, deletePost }) {
  const { id } = useParams();
  const post = feed ? feed.find((p) => p._id === id) : null;

  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(post._id);
    navigate('/');
  };

  return (
    <div className='post-container'>
      <h1>{post.title}</h1>
      <p>Made by: {post.createdBy}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default Show;

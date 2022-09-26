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
    <div className='show-post'>
      <p>Made by: {post.createdBy}</p>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default Show;

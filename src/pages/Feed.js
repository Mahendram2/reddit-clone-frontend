import Post from '../components/Post';
import { Link } from 'react-router-dom';

function Feed({ feed }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <>
        <h1>I am the Feed Component</h1>
        {feed.map((post) => (
          <h2 key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
            <p>Created By: {post.createdBy}</p>
          </h2>
        ))}
      </>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

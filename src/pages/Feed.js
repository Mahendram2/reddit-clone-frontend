import Post from '../components/Post';
import { Link } from 'react-router-dom';

function Feed({ feed }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className='feed'>
        <h1>I am the Feed Component</h1>
        {feed.map((post) => (
          <div className='post' key={post._id}>
            <Link className='post-title' to={`/post/${post._id}`}>
              {post.title}
            </Link>
            <p>Created By: {post.createdBy}</p>
          </div>
        ))}
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

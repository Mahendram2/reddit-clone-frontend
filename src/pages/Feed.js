import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
function Feed({ feed, createdTime, user, sortPostsMostRecent, updateCounter }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    feed = sortPostsMostRecent(feed);
    return (
      <div className='feed'>
        <h1>Latest Posts</h1>
        {feed.map((post) => (
          <div className='post' key={post._id}>
            <Buttons
              count={post.counter}
              postId={post._id}
              updateCounter={updateCounter}
            />
            <Link className='post-title' to={`/post/${post._id}`}>
              {post.title}
            </Link>
            <span>{createdTime(post.createdAt)}</span>
            <p>Created By: {post.createdBy}</p>
          </div>
        ))}
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

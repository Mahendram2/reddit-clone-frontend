import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';

function Boards({
  feed,
  createdTime,
  user,
  sortPostsMostRecent,
  updateCounter,
}) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    function filterPosts(cat) {
      const filteredPosts = feed.filter((p) => p.category === cat);
      return filteredPosts;
    }

    const generalPosts = sortPostsMostRecent(filterPosts('General'));
    const moviePosts = sortPostsMostRecent(filterPosts('Movies'));
    const gamesPosts = sortPostsMostRecent(filterPosts('Video Games'));
    const sportsPosts = sortPostsMostRecent(filterPosts('Sports'));

    return (
      <div className='boards'>
        <h1 className='title'>Boards</h1>
        <div className='board general'>
          <h2>- General -</h2>
          {generalPosts.map((post) => (
            <div className='post' key={post._id}> 
              <Link className='post-title' to={`/post/${post._id}`}>
                {post.title}
              </Link><br />
              <span>{createdTime(post.createdAt)}</span>
              <p>Created By: {post.createdBy}</p>
              <Buttons
                updateCounter={updateCounter}
                count={post.counter}
                postId={post._id}
              />
            </div>
          ))}
        </div>
        <div className='board movies'>
          <h2>- Movies -</h2>
          {moviePosts.map((post) => (
            <div className='post' key={post._id}>
              <Link className='post-title' to={`/post/${post._id}`}>
                {post.title}
              </Link><br />
              <span>{createdTime(post.createdAt)}</span>
              <p>Created By: {post.createdBy}</p>
              <Buttons
                updateCounter={updateCounter}
                count={post.counter}
                postId={post._id}
              />
            </div>
          ))}
        </div>
        <div className='board vg'>
          <h2>- Video Games -</h2>
          {gamesPosts.map((post) => (
            <div className='post' key={post._id}>
              <Link className='post-title' to={`/post/${post._id}`}>
                {post.title}
              </Link><br />
              <span>{createdTime(post.createdAt)}</span>
              <p>Created By: {post.createdBy}</p>
              <Buttons
                updateCounter={updateCounter}
                count={post.counter}
                postId={post._id}
              />
            </div>
          ))}
        </div>
        <div className='board sports'>
          <h2>- Sports -</h2>
          {sportsPosts.map((post) => (
            <div className='post' key={post._id}>
              <Link className='post-title' to={`/post/${post._id}`}>
                {post.title}
              </Link><br />
              <span>{createdTime(post.createdAt)}</span>
              <p>Created By: {post.createdBy}</p>
              <Buttons
                updateCounter={updateCounter}
                count={post.counter}
                postId={post._id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Boards;

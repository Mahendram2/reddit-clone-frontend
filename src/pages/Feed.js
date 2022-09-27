import { Link } from 'react-router-dom';

function Feed({ feed }) {
  function postCreatedTime(postTime) {
    // TODO: This works for times 1 day and greater, but the hours and minutes section needs to be reworked.
    const date = new Date();
    const datevalues = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      min: date.getMinutes(),
    };

    const postvalues = {
      year: postTime.slice(0, 4),
      month: postTime.slice(5, 7),
      day: postTime.slice(8, 10),
      hour: postTime.slice(11, 13),
      min: postTime.slice(14, 16),
    };

    const units = ['year', 'month', 'day', 'hour', 'minute'];
    const timeSince = [];

    for (let key in datevalues) {
      timeSince.push(Math.abs(postvalues[key] - datevalues[key]));
    }

    for (let i = 0; i < timeSince.length; i++) {
      if (timeSince[i] > 0) {
        if (timeSince[i] == 1) {
          return `${timeSince[i]} ${units[i]} ago`;
        } else {
          return `${timeSince[i]} ${units[i]}s ago`;
        }
      }
    }
  }

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
            <span>{postCreatedTime(post.createdAt)}</span>
            <p>Created By: {post.createdBy}</p>
          </div>
        ))}
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

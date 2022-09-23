import Post from '../components/Post';

function Feed({ feed }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <>
        <h1>I am the Feed Component</h1>
        {feed.map((post) => (
          <Post
            title={post.title}
            createdBy={post.createdBy}
            key={post.title}
          />
        ))}
      </>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

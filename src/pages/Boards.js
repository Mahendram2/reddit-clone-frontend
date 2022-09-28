function Boards({ feed, createdTime, user }) {
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    function filterPosts(cat) {
      const filteredPosts = feed.filter((p) => p.category === cat);
      return filteredPosts;
    }

    const moviePosts = filterPosts('Movies');

    return (
      <div className='boards'>
        <h1>Boards</h1>
        <div className='board'>
          <h2>Movies</h2>
          {moviePosts.map((post) => (
            <h3 key={Math.random}>{post.title}</h3>
          ))}
        </div>
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Boards;

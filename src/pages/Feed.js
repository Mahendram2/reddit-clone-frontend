import { Link, useParams } from 'react-router-dom';
import Buttons from '../components/Buttons';
import { useState } from 'react';
import Pagination from '../components/Pagination';

function Feed({ feed, createdTime, user, sortPostsMostRecent, updateCounter }) {
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    feed = sortPostsMostRecent(feed);
    const currentPosts = feed.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div className='feed'>
        <h1 className='title'>Latest Posts</h1>
        {currentPosts.map((post) => (
          <div className='post' key={post._id}>
            <Link className='post-title' to={`/post/${post._id}`}>
              {post.title}
            </Link>
            <br />
            <span>{createdTime(post.createdAt)}</span>
            <p>Created By: {post.createdBy}</p>
            <Buttons
              count={post.counter}
              postId={post._id}
              updateCounter={updateCounter}
            />
          </div>
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={feed.length}
          paginate={paginate}
          pageNum={page}
        />
      </div>
    );
  };

  return feed ? loaded() : loading();
}

export default Feed;

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Feed from '../pages/Feed';
import NewPost from '../pages/NewPost';
import Show from '../pages/Show';

function Main(props) {
  const [feed, setFeed] = useState(null);

  const API_URL = 'http://localhost:4000/api/post/';

  const getData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFeed(data);
    } catch (error) {
      console.log(error);
      // TODO craft error message for user
    }
  };

  const createPost = async (post) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify(post),
      });
      getData();
    } catch (error) {
      console.log(error);
      // TODO craft error message for user
    }
  };

  const deletePost = async (id) => {
    try {
      await fetch(API_URL + 'delete/' + id, {
        method: 'DELETE',
      });
      getData();
    } catch (error) {
      console.log(error);
      // TODO craft error message for user
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Feed feed={feed} />} />
      <Route path='/newpost' element={<NewPost createPost={createPost} />} />
      <Route
        path='/post/:id'
        element={<Show feed={feed} deletePost={deletePost} />}
      />
    </Routes>
  );
}

export default Main;

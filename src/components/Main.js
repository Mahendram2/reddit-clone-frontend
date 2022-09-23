import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Feed from '../pages/Feed';
import NewPost from '../pages/NewPost';

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

  useEffect(() => {
    getData();
  }, []);

  console.log('In Main: ', feed);

  return (
    <Routes>
      <Route path='/' element={<Feed feed={feed} />} />
      <Route path='/newpost' element={<NewPost />} />
    </Routes>
  );
}

export default Main;

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Feed from '../pages/Feed';
import NewPost from '../pages/NewPost';
import Show from '../pages/Show';

// HERE FOR IF WE WANT TO HIDE DATA
function PrivatePageContainer({ children, user }) {
  return user ? children : <Navigate to="/" />
}

function Main({ user }) {

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

  const createComment = async (comment, id) => {
    try {
      await fetch(API_URL + id + '/comment', {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify(comment),
      });
    } catch (error) {
      console.log(error);
      // TODO craft error message for user
    }
  };

  function createdTime(itemTime) {
    // TODO: This works for times 1 day and greater, but the hours and minutes section needs to be reworked.
    const date = new Date();
    const dateValues = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      min: date.getMinutes(),
    };

    const itemValues = {
      year: itemTime.slice(0, 4),
      month: itemTime.slice(5, 7),
      day: itemTime.slice(8, 10),
      hour: itemTime.slice(11, 13),
      min: itemTime.slice(14, 16),
    };

    const units = ['year', 'month', 'day', 'hour', 'minute'];
    const timeSince = [];

    for (let key in dateValues) {
      timeSince.push(Math.abs(itemValues[key] - dateValues[key]));
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

  useEffect(() => {
    if(user) {
      getData();
    } else {
      setFeed(null)
    }
    
  }, [user]);

  return (
    <div className='feed-container'>
      <Routes>
          <Route
            path='/'
            element={<Feed feed={feed} createdTime={createdTime} />}
          />
        <Route path='/newpost' element={<NewPost createPost={createPost} />} />
        <Route
          path='/post/:id'
          element={
              <Show
                feed={feed}
                deletePost={deletePost}
                createComment={createComment}
                createdTime={createdTime}
              />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;

import { Routes, Route } from 'react-router-dom';
import Feed from '../pages/Feed';
import NewPost from '../pages/NewPost';

function Main(props) {
  return (
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/newpost' element={<NewPost />} />
    </Routes>
  );
}

export default Main;

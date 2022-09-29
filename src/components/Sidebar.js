import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div className='sb-container'>
        <Link to='./newpost' className='create'>
            <button type='button' className='create-b'>Create Post</button>
        </Link>
        <Link to='./boards' className='boards-link'>
            <button type='button' className='create-b'>Boards</button>
        </Link>
        <Link to='./premium' className='premium'>
            <button type='button' className='create-b'>Upgrade</button>
        </Link>
        <Link to='./language' className='languages'>
            <button type='button' className='create-b'>Change Language</button>
        </Link>
    </div>
  );

}

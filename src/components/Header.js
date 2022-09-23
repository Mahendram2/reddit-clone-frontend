import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className='header'>
      <Link to='/'>
        <h2>Redundant</h2>
      </Link>
      <Link to='/newpost'>
        <div>Create A New Post</div>
      </Link>
    </div>
  );
}

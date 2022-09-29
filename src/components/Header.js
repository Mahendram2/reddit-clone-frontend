import { login, logout } from '../firebase';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function Header({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/1');
  };

  return (
    <nav className='nav'>
      <Link to='/1' onClick={handleClick}>
        <div>Redundant</div>
      </Link>
      <section className='auth-options'>
        {user ? (
          <>
            <div>Welcome, {user.displayName}</div>
            <div onClick={logout}>Log Out</div>
          </>
        ) : (
          <div onClick={login}>Log In</div>
        )}
      </section>
    </nav>
  );
}

import { login, logout } from '../firebase';

import { Link } from 'react-router-dom';

export default function Header({ user }) {
    return (
        <nav className="nav">
            <Link to="/1">
                <div>Redundant</div>
            </Link>
            <section className='auth-options'>
                {
                    user ? 
                    <>
                        <div>Welcome, {user.displayName}</div>
                        <div onClick={logout}>Log Out</div>
                    </>
                    :
                    <div onClick={login}>Log In</div>
                }
            </section>
        </nav>
    );
}
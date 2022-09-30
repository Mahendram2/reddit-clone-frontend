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
        <div className='ad-boi'>
            <h3>sponsered ads...</h3>
            <div>
                <img src="https://ca.slack-edge.com/T0351JZQ0-U03CDDSR9L5-0610e176314f-512" alt='meh' className='ad-photo'></img>
                <a><p className='haha'>"You will never believe what this poet said on this site..."</p></a><br />
            </div>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFjsSInrq8duQ/profile-displayphoto-shrink_800_800/0/1659983669722?e=1669852800&v=beta&t=TMMrT8-unSpaVe5PYQpGm-IsWFgYAEw5H8GhVaS-gwA" alt='meh' className='ad-photo'></img>
                <a><p className='haha'>"I will never travel anywhere again until talking to this group!"</p></a><br />
            </div>
        </div> 
    </div>
  );

}

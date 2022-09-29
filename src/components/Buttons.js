import { useState } from 'react';

function Buttons({ count, postId, updateCounter }) {
  const [num, setNum] = useState(count);

  //   Clicking the buttons will rerender the component once, but subsequent clicks not rerender, but will still update the count
  const Increment = () => {
    setNum(count + 1);
    updateCounter({ counter: num + 1 }, postId);
  };
  const Decrement = () => {
    setNum(count - 1);
    updateCounter({ counter: num - 1 }, postId);
  };

  return (
    <>
      <ul>
        <li>
          <button onClick={Increment} dangerouslySetInnerHTML={{ __html: '&uarr;' }} className="create-b"></button>
        </li>
        <li className='count'>
            <h1 className='create-b'>{num}</h1>
        </li>
        <li>
          <button onClick={Decrement} dangerouslySetInnerHTML={{ __html: '&darr;' }} className="create-b"></button>
        </li>
      </ul>
    </>
  );
}

export default Buttons;

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
      <button
        onClick={Increment}
        dangerouslySetInnerHTML={{ __html: '&uarr;' }}
      ></button>
      <h1>{num}</h1>
      <button
        onClick={Decrement}
        dangerouslySetInnerHTML={{ __html: '&darr;' }}
      ></button>
    </>
  );
}

export default Buttons;

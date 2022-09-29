import { useState } from "react";

function Buttons(props){
    const [num, setNum] = useState(0);

    const Increment = () =>{
        setNum(num+1)
    }
    const Decrement = () =>{
       if (num >0){
           setNum(num-1)
       }else {
        setNum(0)
       }
    }
    return(
        <>
        <button
            onClick={Increment}
            dangerouslySetInnerHTML={{ __html: "&uarr;" }}
            >
        </button>
        <h1>{num}</h1>
       <button

        onClick={Decrement}
          dangerouslySetInnerHTML={{ __html: "&darr;" }}
        >
        </button>
        </>
    )
}

export default Buttons;
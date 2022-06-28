import {useCallback, useState} from "react";
import styled from "styled-components";

const StyledButton=styled.button`
    background: red;
    transition: all 2s;
    &:hover {
      background:blue;
    }
`



const Counter = () => {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(1);
    const incrementCount = useCallback(() => { // 상태를 간직
        setCount(count+1);
    },[count])

    const toggleShow = () => {
        console.log(show);
        setShow(!show);
    }

    return (
        <div>
            {show && <p>{count}</p>}
            <StyledButton onClick={incrementCount}>count!</StyledButton>
            <button onClick={toggleShow}> Toggle </button>
        </div>
    )
}

export default Counter;
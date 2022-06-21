import {useCallback, useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(1);
    const incrementCount = useCallback(() => { // 상태를 간직
        setCount(count+1);
    },[count])
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount} >count!</button>

        </div>
    )
}

export default Counter;
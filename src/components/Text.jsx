import {forwardRef, useImperativeHandle} from "react";
import {useRef} from "react";

const Text = (_, ref) => {
    const textRef = useRef();
    useImperativeHandle(ref, () => ({
            printHello: () => console.log("hello"),
            cfocus: () => textRef.current.focus(),

    }));

    return (
        <div>
            <input type="text" value={"하위컴포넌트"} onChange={()=>{console.log("hi")}} ref={textRef}/>
        </div>
    )
}

export default forwardRef(Text);
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import styled from "styled-components";
import Btn from "./Text";
import Text from "./Text";

const get = () => new Promise(function (resolve, reject) {
    setTimeout(()=> resolve(88888),0);
});

const P = styled.p`
  opacity:${props => props.opacity};
  display:${props => props.display};
  font-size: ${props =>props.fontSize}px;
  transition: all 1s;
`;

const EffectTest = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState(0);
    const [opacity, setOpacity] = useState(1)
    const [display, setDisplay] = useState("block");
    const [fontSize, setFontSize] = useState(10);
    const textRef = useRef(null);
    // onRender
    console.log('render', value);
    // onMountBeforePaint & onUpdateBeforePaint
    // useLayoutEffect(() => {
    //     console.log("layout_effect");
    //     if(value === 0) {
    //         //     get().then((data)=>{ // useLayoutEffect 자체는 paint전에 실행되지만 setValue는 2초뒤에 실행된다.
    //         //         setValue(data);
    //         //     });
    //         setValue(88888);
    //     }
    // }, [value]);
    //onMountBeforePaint & onUpdateAfterPaint
    useEffect(()=> {
        console.log("effect");
        if(value === 0) {
            // get().then((data)=>{
            //     setValue(data);
            // });
            setValue(77777);
        }

    },[value])


    const toggleShow = useCallback(()=> {
        opacity ===1 ?
            (() => {
                setOpacity(0)
                setTimeout(() => {
                    setDisplay("none");
                }, 500)
            })()
        :
            (()=> {
                setDisplay("block")
                setTimeout(() => {
                    setOpacity(1);
                }, 500);
            })();
        },[opacity]);
    const incrementFontSize = useCallback(()=>{
        setFontSize(prevState => {
            return prevState+10
        });
    },[])

    const focusText = () => {
        textRef.current.cfocus();
        textRef.current.printHello();
    }

    return (
        <>
            <P display={display} opacity={opacity} fontSize={fontSize}>hello~</P>
            <button onClick={toggleShow}>toggle</button>
            <button onClick={incrementFontSize}>글자크기</button>
            <button onClick={() => {setValue(0)}}>
                value: {value}
            </button>
            {/*<input type="text" value={"하이"} ref={textRef}/>*/}
            <Text ref={textRef} />
            <button onClick={focusText}></button>
        </>
    )
}
export default EffectTest
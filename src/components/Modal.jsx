import styled from "styled-components";

const StyledModal=styled.div`
      // 모달의 위치
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // 모달의 크기
      width: 500px;
      height: 600px;
      border-radius: 10px;
      background: white;
      border: 2px solid;
      // 모달의 존재
      display: ${props => props.exist};
`

const Modal = ({exist}) => {


    return (
        <StyledModal exist={exist}>
            <p>
                Lorem Ipsum was simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </StyledModal>
    )
}

export default Modal;
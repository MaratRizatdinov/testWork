import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 200px;
  background-color: #f7f4f1;
  left: calc(50% - 225px);
  top: 250px;
  box-shadow: 3px 3px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  gap: 50px;
  z-index: 1;
`;
export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

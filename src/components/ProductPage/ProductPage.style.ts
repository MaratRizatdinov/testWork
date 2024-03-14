import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding-left: calc(50% - 346px);
  padding-right: calc(50% - 346px);
  margin-top: 60px;
`;
export const Form = styled.form`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 190px auto;
  grid-template-rows: 36px 36px 36px 95px;
  row-gap: 20px;  
`;
export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
`;
export const FormLabelRequired = styled(FormLabel)`
  &:after {
    content: "*";
    color: red;
  }
`;
export const FormLabelTextArea = styled(FormLabel)`
  align-items: start;
  padding-top: 5px;
`;
const InpitFields = css`
  font-family: Montserrat; //
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #aaa; //
  border-radius: 6px; //
  font-size: 16px; //
  font-weight: 400; //
  line-height: 20px; //
  letter-spacing: 0em; //
  text-align: left; //
  color: #000; //
  width: 100%;
  height: 100%;
  background-color: #fafafa; //
  &:focus {
    outline: 1px solid #6184ff;
  }
`;
export const FormTextInput = styled.input`
  ${InpitFields};
`;
export const FormSelect = styled.select`
  ${InpitFields};
`;
export const FormTextArea = styled.textarea`
  ${InpitFields};
  padding: 8px 16px;
  resize: none;
`;

export const FormCheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;
export const FormCheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
export const FormButtonsContainer = styled.div`
  grid-column: span 2;
  padding-top: 35px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const FormErrorField = styled.div`
  position: absolute;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: red;
  top: 36px;
  left: 23px;
`;

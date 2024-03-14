import styled from "styled-components";

export const Table = styled.div`
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  margin-top: 30px;
`;
export const TableRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 43px 214px auto 235px 188px 40px 98px;
  grid-template-rows: 43px;
`;
export const TableHeader = styled(TableRow)`
  grid-template-rows: 38px;
`;

interface ICeilProp {
  $header?: boolean;
}

export const TableCeil = styled.div<ICeilProp>`
  border: 1px solid #777;
  background-color: #ffffff;
  display: flex;
  justify-content: start;
  padding-left: 10px;
  align-items: center;
  font-family: Montserrat;
  font-size: ${(props) => (props.$header ? "14px" : "16px")};
  font-weight: ${(props) => (props.$header ? "600" : "400")};
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => (props.$header ? "#777777" : "#333333")};
`;

export const TableCeilWithIcons = styled(TableCeil)`
  padding: 0;
  justify-content: center;
  gap: 15px;
  position: relative;
`;
export const TableIcon = styled.svg`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }
`;

export const TableContent = styled.div``;
export const MessageWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 80vh;
`;

export const TablePopup = styled.div`
  position: absolute;
  top: -65px;
  left: -245px;
  width: 250px;
  height: 90px;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  background-color: antiquewhite;
  padding: 15px;
  border: 1px solid #777;
  border-radius: 10px;
`;

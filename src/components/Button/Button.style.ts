import styled from "styled-components";

interface IProp {
  $color: string;
}
export const Button = styled.button<IProp>`
  font-family: Montserrat;
  font-weight: 600;
  padding: 13px 24px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$color === "yellow"
      ? "#f7ee55"
      : props.$color === "red"
      ? "#DA1515"
      : props.$color === "black"
      ? "#000"
      : "#fff"};
  color: ${(props) => (props.$color === "yellow" ? "#000" : "#fff")};

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
  }
`;

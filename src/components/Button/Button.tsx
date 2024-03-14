import React from "react";
import * as S from "./Button.style";

interface Iprop {
  children: string;
  $color: string;
  type: "button" | "reset" | "submit" | undefined;
  callback?: (e: React.FormEvent<HTMLButtonElement> | void) => void;
  disabled?: boolean;
}
export const Button = ({
  children,
  $color,
  callback,
  type,
  disabled,
}: Iprop) => {
  return (
    <S.Button
      type={type}
      $color={$color}
      onClick={callback}
      disabled={disabled}      
    >
      {children}
    </S.Button>
  );
};

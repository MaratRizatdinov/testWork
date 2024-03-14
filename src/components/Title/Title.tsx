import React from "react";
import * as S from "./Title.style";

interface Iprop {
  children: string;
}

export const Title = ({ children }: Iprop) => {
  return <S.Title>{children}</S.Title>;
};

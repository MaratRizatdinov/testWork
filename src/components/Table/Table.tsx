import React from "react";
import * as S from "./Table.style";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableContent } from "./TableContent/TableContent";

export const Table = () => {
  return (
    <S.Table>
      <TableHeader />
      <TableContent />
    </S.Table>
  );
};

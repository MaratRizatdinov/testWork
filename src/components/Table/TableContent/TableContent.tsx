import * as S from "../Table.style";
import { useGetProductsQuery } from "../../../redux/productsApi";
import { TableRow } from "./TableRow/TableRow";
import { useState } from "react";

export const TableContent = () => {
  
  const [toolTip, setToolTip] = useState("");
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <S.MessageWindow>Loading...</S.MessageWindow>;
  if (isError) return <S.MessageWindow>Error...</S.MessageWindow>;
  if (!data || data.length === 0)
    return <S.MessageWindow>Данные отсутствуют</S.MessageWindow>;

  const sortedList = [...data].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <S.TableContent>
      {sortedList.map((elem, index) => {
        return (
          <TableRow
            key={elem.id}
            elem={elem}
            index={index}
            toolTip={toolTip}
            setToolTip={setToolTip}
          />
        );
      })}
    </S.TableContent>
  );
};

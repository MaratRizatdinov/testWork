import * as S from "../Table.style";
export const TableHeader = () => {
  return (
    <S.TableHeader>
      <S.TableCeil $header>№</S.TableCeil>
      <S.TableCeil $header>Кол-во пачек</S.TableCeil>
      <S.TableCeil $header>Тип упаковки</S.TableCeil>
      <S.TableCeil $header>Дата создания</S.TableCeil>
      <S.TableCeil $header>Статус</S.TableCeil>
      <S.TableCeil $header></S.TableCeil>
      <S.TableCeil $header></S.TableCeil>
    </S.TableHeader>
  );
};

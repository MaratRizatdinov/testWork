import React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Table } from "../Table/Table";
import * as S from "./MainPage.style";

export const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Title>Список выпускаемой продукции</Title>
        <Button type ="button" $color="yellow" callback={handleClick}>
          Создать тип продукции
        </Button>
      </S.Header>
      <Table />
    </S.Wrapper>
  );
};

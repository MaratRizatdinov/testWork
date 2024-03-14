import React, { useState } from "react";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import * as S from "./ProductPage.style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../redux/productsApi";
import { IProduct } from "../../types/types";
import { useEditProductMutation } from "../../redux/productsApi";
import { Modal } from "../Modal/Modal";

interface IProps {
  type: "create" | "edit";
  content?: IProduct;
}

export const ProductPage = ({ type, content }: IProps) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [createProduct, { isLoading :createLoading }] = useCreateProductMutation();
  const [editProduct,{ isLoading :editLoading }] = useEditProductMutation();
  const value = {
    packsNumber: content?.packsNumber || "",
    packageType: content?.packageType || "",
    isArchived: content?.isArchived || false,
    description: content?.description || "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: value,
  });

  const onCreate = async (data: any) => {
    await createProduct(data)
      .unwrap()
      .then(() => {
        reset();
        navigate("/");
      })
      .catch(() => {
        console.log("Что-то не так с серваком");
      });
  };

  const onEdit = async (data: any) => {
    const id = content?.id;
    const body = data;
    await editProduct({ id, body })
      .unwrap()
      .then(() => {
        reset();
        navigate("/");
      })
      .catch(() => {
        console.log("Что-то не так с серваком");
      });
  };

  const onSubmit = type === "create" ? onCreate : onEdit;  

  return (
    <S.Wrapper>
      {modal && content && <Modal id={content.id} setModal={setModal} />}
      <Title>
        {type === "create"
          ? "Создание типа продукции"
          : "Редактирование типа продукции"}
      </Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormLabelRequired htmlFor="packsNumber">
          Кол-во пачек&nbsp;
        </S.FormLabelRequired>
        <div style={{ position: "relative" }}>
          <S.FormTextInput
            type="number"
            id="packsNumber"
            {...register("packsNumber", {
              valueAsNumber: true,
              required: 'Поле "Кол-во пачек" обязательно к заполнению',
              validate: {
                isZero: (value) =>
                  Number(value) !== 0 || "Кол-во пачек не может быть нулевым",
                positive: (value) =>
                  Number(value) > 0 ||
                  "Кол-во пачек не может быть отрицательным",
              },
            })}
          />
          {errors?.packsNumber && (
            <S.FormErrorField>
              {errors?.packsNumber?.message?.toString() || "Error!"}
            </S.FormErrorField>
          )}
        </div>
        <S.FormLabelRequired htmlFor="packageType">
          Тип упаковки&nbsp;
        </S.FormLabelRequired>
        <div style={{ position: "relative" }}>
          <S.FormSelect
            id="packageType"
            {...register("packageType", {
              required: 'Поле "Тип упаковки" обязательно к заполнению',
            })}
          >
            <option value="">Выберите тип упаковки</option>
            <option value="компрессия">компрессия</option>
            <option value="некомпрессия">некомпрессия</option>
          </S.FormSelect>
          {errors?.packageType && (
            <S.FormErrorField>
              {errors?.packageType?.message?.toString() || "Error!"}
            </S.FormErrorField>
          )}
        </div>
        <S.FormLabel htmlFor="isArchived">Архивировано</S.FormLabel>
        <S.FormCheckBoxContainer>
          <S.FormCheckBox
            type="checkbox"
            id="isArchived"
            {...register("isArchived")}
          />
        </S.FormCheckBoxContainer>
        <S.FormLabelTextArea htmlFor="description">
          Описание
        </S.FormLabelTextArea>
        <S.FormTextArea id="description" {...register("description")} />
        <S.FormButtonsContainer>
          {type === "create" ? null : (
            <Button
              type="button"
              $color="red"
              callback={(e) => {
                if (e) e.stopPropagation();
                setModal(true);
              }}
            >
              Удалить
            </Button>
          )}
          <Button type="reset" $color="black" callback={() => navigate("/")}>
            Отмена
          </Button>
          <Button type="submit" $color="yellow" disabled={createLoading || editLoading}>
            {type === "create" ? "Создать" : "Сохранить"}
          </Button>
        </S.FormButtonsContainer>
      </S.Form>
    </S.Wrapper>
  );
};

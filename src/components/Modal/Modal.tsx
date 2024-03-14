import { Dispatch, SetStateAction } from "react";
import { useDeleteProductMutation } from "../../redux/productsApi";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Button } from "../Button/Button";
import * as S from "./Modal.style";

interface IProps {
  id: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setModal, id }: IProps) => {
  const ref = useOutsideClick(() => {
    setModal(false);
  });

  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleClickToDelete = async (id: string) => {
    await deleteProduct(id)
      .unwrap()
      .catch(() => {
        console.log("Ошибка сервера");
      })
      .finally(() => {
        setModal(false);
      });
  };

  return (
    <S.ModalContainer ref={ref}>
      <p>
        {isLoading
          ? "Идет удаление..."
          : "Вы уверены что хотите удалить запись?"}
      </p>
      <S.ButtonsBlock>
        <Button
          $color="red"
          type="button"
          callback={() => handleClickToDelete(id)}
        >
          Удалить
        </Button>
        <Button
          $color="black"
          type="button"
          callback={() => {
            setModal(false);
          }}
        >
          Отмена
        </Button>
      </S.ButtonsBlock>
    </S.ModalContainer>
  );
};

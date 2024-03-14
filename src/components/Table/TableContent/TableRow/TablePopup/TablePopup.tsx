import React, { Dispatch, SetStateAction } from 'react'
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import * as S from '../../../Table.style'
interface IProp {
  children: string;
  setToolTip :Dispatch<SetStateAction<string>>
}

export const TablePopup = ({ children, setToolTip }: IProp) => {
    const ref = useOutsideClick(() => {        
		setToolTip("")
	})
  return (
    <S.TablePopup ref ={ref} >
         {children}
    </S.TablePopup>    
  );
};

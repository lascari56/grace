import React from 'react';

import * as S from "./table-link.styled"

const TableLinkView = ({children, ...props}) => {
  return (
    <S.Container {...props}>{children}</S.Container>
  );
}

export default TableLinkView;

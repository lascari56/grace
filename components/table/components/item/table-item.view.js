import React from 'react';

import * as S from "./table-item.styled"

const TableItemView = ({ className, children, value }) => {
  return (
    <S.Container className={className}>
      {value}
    </S.Container>
  );
}

export default TableItemView;

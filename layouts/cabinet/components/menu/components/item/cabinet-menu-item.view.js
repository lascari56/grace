import React from 'react'

import * as S from './cabinet-menu-item.styled'

export default function CabinetMenuItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Icon>{data?.icon}</S.Icon>

      <S.Title>{data?.title}</S.Title>
    </S.Container>
  )
}

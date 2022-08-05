import React from 'react'

import * as S from './button.styled'

export default function ButtonView({size, title, className, theme}) {
  return (
    <S.Container className={className} theme={theme} size={size}>
      <S.Title theme={theme}>{title}</S.Title>
    </S.Container>
  )
}

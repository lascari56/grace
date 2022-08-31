import React from 'react'

import * as S from './button.styled'

export default function ButtonView({size, title, className, theme, loading, disabled, onClick}) {
  return (
    <S.Container className={className} theme={theme} size={size} disabled={disabled || loading} onClick={!disabled ? onClick : undefined}>
      <S.Title theme={theme}>{title}</S.Title>
    </S.Container>
  )
}

import React from 'react'

import * as S from './profile-status-item.styled'

export default function ProfileStatusItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Indicator/>
    </S.Container>
  )
}

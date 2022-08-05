import React from 'react'

import ClockSVG from './image/clock'

import * as S from './recordings-item.styled'

export default function RecordingsItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Title>{data.title}</S.Title>

      <S.Status>{data.status}</S.Status>

      <S.Oclock>
        <ClockSVG/>

        <S.Time>{data.time}</S.Time>
      </S.Oclock>
    </S.Container>
  )
}

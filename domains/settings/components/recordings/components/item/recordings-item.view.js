import React from 'react'

import ClockSVG from './image/clock'
import RecordingsItemProgress from './progress'

import * as S from './recordings-item.styled'

export default function RecordingsItemView({data, className}) {
  return (
    <S.Container className={className}>
      <S.Content>
      <S.Title>{data.title}</S.Title>

      <S.Status>{data.status}</S.Status>

      <S.Oclock>
        <ClockSVG/>

        <S.Time>{data.time}</S.Time>
      </S.Oclock>
      </S.Content>

      <S.Content>
        <RecordingsItemProgress/>
      </S.Content>
    </S.Container>
  )
}

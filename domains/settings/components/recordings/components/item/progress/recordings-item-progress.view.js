import React from 'react'

import PlaySVG from './image/play'

import * as S from './recordings-item-progress.styled'

export default function RecordingsItemProgressView() {
  return (
    <S.Container>
      <PlaySVG/>

      <S.Percent>100%</S.Percent>
    </S.Container>
  )
}

import React from 'react'

import ArrowSVG from './image/arrow'

import * as S from './select.styled'

export default function SelectView({theme}) {
  return (
    <S.Select>
      <S.Date theme={theme}>
        <option>May - June 2021</option>

        <option>Hello1</option>
      </S.Date>

      <ArrowSVG/>
    </S.Select>
  )
}

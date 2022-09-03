import React from 'react'

import ArrowLeftSVG from './images/arrow-left'
import ArrowRightSVG from './images/arrow-right'

import * as S from './pagination.styled'

export default function PaginationView({className}) {
  return (
    <S.Container className={className}>
      <S.Item>
        <ArrowLeftSVG/>
      </S.Item>

      <S.Item>
        <S.Title>1</S.Title>
      </S.Item>

      <S.Item>
        <S.Title>2</S.Title>
      </S.Item>

      <S.Item>
        <S.Title>3</S.Title>
      </S.Item>

      <S.Item>
        <S.Title>4</S.Title>
      </S.Item>

      <S.Item>
        <ArrowRightSVG/>
      </S.Item>
    </S.Container>
  )
}

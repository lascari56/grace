import React from 'react'

import * as S from './dashboard-statistics-item.styled'

export default function DashboardStatisticsItemView({data}) {
  return (
    <S.Container theme={data.theme}>
      <S.Icon>{data.icon}</S.Icon>

      <S.Content>
        <S.Title>{data.title}</S.Title>

        <S.Value>{data.value}</S.Value>
      </S.Content>
    </S.Container>
  )
}

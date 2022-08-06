import React from 'react'

import { Select } from '@components'

import * as S from './dashboard-info-item.styled'

export default function DashboardInfoItemView({className}) {
  return (
    <S.Container className={className}>
      <S.Header>
        <S.Title>Total min monitored</S.Title>

        <Select/>
      </S.Header>

      <S.Content>
        <S.Icon/>
      </S.Content>
    </S.Container>
  )
}

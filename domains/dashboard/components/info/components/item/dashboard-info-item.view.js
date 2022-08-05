import React from 'react'

import { Select } from '@components'



import * as S from './dashboard-info-item.styled'

export default function DashboardInfoItemView() {
  return (
    <S.Container>
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

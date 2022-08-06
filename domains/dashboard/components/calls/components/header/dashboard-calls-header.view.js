import React from 'react'

import { Select } from '@components'

import * as S from './dashboard-calls-header.styled'

export default function DashboardCallsHeaderView() {
  return (
    <S.Container>
      <S.Title>Last monitored calls</S.Title>

      <Select/>
    </S.Container>
  )
}

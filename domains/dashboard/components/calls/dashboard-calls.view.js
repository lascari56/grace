import React from 'react'

import DashboardCallsHeader from './components/header'
import DashboardCallsTable from './components/table'

import * as S from './dashboard-calls.styled'

export default function DashboardClsView() {
  return (
    <S.Container>
      <DashboardCallsHeader/>

      <S.Content>
        <DashboardCallsTable/>
      </S.Content>
    </S.Container>
  )
}

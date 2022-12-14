import React from 'react'

// import CabinetLayouts from '../../layouts/cabinet'

import DashboardStatistics from './components/statistics'
import DashboardInfo from './components/info'
import DashboardCalls from './components/calls'

import * as S from './dashboard.styled'

export default function DashboardView() {
  return (
    // <CabinetLayouts title='Dashboard'>
    <S.Container>
      <DashboardStatistics/>

      <DashboardCalls/>

      <DashboardInfo/>
    </S.Container>
    // </CabinetLayouts>
  )
}

import React from 'react'

import CabinetLayouts from '../../layouts/cabinet'
import DashboardStatistics from './components/statistics'
import DashboardInfo from './components/info'

import * as S from './dashboard.styled'

export default function DashboardView() {
  return (
    <CabinetLayouts>
      <DashboardStatistics/>

      <DashboardInfo/>
    </CabinetLayouts>
  )
}

import React from 'react'

import TotalSVG from './images/total'
import ActiveSVG from './images/active'
import AudioSVG from './images/audio'
import MonitoredSVG from './images/monitored'

import * as S from './dashboard-statistics.styled'

const items =[
  {
    title:'Total Users',
    value:'29,430',
    icon: <TotalSVG/>,
  },
  {
    title:'Active Users',
    value:'1,520',
    icon: <ActiveSVG/>,
    theme: 'yellow'
  },
  {
    title:'Total Audio Files',
    value:'9,721',
    icon: <AudioSVG/>,
    theme: 'pink'
  },
  {
    title:'Total Min Monitored',
    value:'892,345',
    icon: <MonitoredSVG/>,
    theme: 'violet'
  },

]

export default function DashboardStatisticsView() {
  return (
    <S.Container>
      {items.map((item, index) => (
          <S.Item key={index} data={item}/>
        ))}
    </S.Container>
  )
}

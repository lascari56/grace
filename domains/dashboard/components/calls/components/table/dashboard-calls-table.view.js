import React from 'react'

import * as S from './dashboard-calls-table.styled'

const items = [
  {
    name: 'Robert Thomas',
    recording: '33',
    time: '2 min 43 sec',
    status :'Analyzing...'
  },
  {
    name: 'Robert Thomas',
    recording: '33',
    time: '2 min 43 sec',
    status :'Analyzing...'
  },
  {
    name: 'Robert Thomas',
    recording: '33',
    time: '2 min 43 sec',
    status :'Analyzing...'
  },
  {
    name: 'Robert Thomas',
    recording: '33',
    time: '2 min 43 sec',
    status :'Analyzing...'
  },
  {
    name: 'Robert Thomas',
    recording: '33',
    time: '2 min 43 sec',
    status :'Analyzing...'
  },
]

export default function DashboardCallsTableView() {
  return (
    <S.Container>
      {items.map((item, index) => (
        <S.Item key={index} data={item}/>
      ))}
    </S.Container>
  )
}

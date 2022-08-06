import React from 'react'

import * as S from './dashboard-calls-table-item.styled'

export default function DashboardCallsTableItemView({data, className}) {
  return (
    <S.Container className={className}>

      <S.Icon>
        <S.Avatar src='/images/avatar.jpg'/>
      </S.Icon>

      <S.Name>{data.name}</S.Name>

      <S.Recording>Recording No.{data.recording}</S.Recording>

      <S.Time>{data.time}</S.Time>

      <S.Status>{data.status}</S.Status>
    </S.Container>
  )
}

import React from 'react'

import LogoSVG from './images/logo'
import Dashboard from './images/dashboard'
import UsersSVG from './images/users'
import RecordingsSVG from './images/recordings'
import SettingsSVG from './images/setting'

import * as S from './cabinet-menu.styled'

const items = [
  {
    title:'Dashboard',
    icon: <Dashboard/>
  },
  {
    title:'Users',
    icon: <UsersSVG/>
  },
  {
    title:'All recordings',
    icon: <RecordingsSVG/>
  },
  {
    title:'Settings',
    icon: <SettingsSVG/>
  },
]

export default function CabinetMenuView() {
  return (
    <S.Container>
      <LogoSVG/>

      <S.Content>
        {items.map((item, index) => (
          <S.Item key={index} data={item}/>
        ))}
      </S.Content>

    </S.Container>
  )
}

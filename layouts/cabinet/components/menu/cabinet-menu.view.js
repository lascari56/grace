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
    icon: <Dashboard/>,
    href: '/dashboard'
  },
  {
    title:'Users',
    icon: <UsersSVG/>,
    href: '/users'
  },
  {
    title:'All recordings',
    icon: <RecordingsSVG/>,
    href: '/recordings'
  },
  {
    title:'Settings',
    icon: <SettingsSVG/>,
    href: '/settings'
  },
]

export default function CabinetMenuView({ activeRoute }) {
  return (
    <S.Container>
      <LogoSVG/>

      <S.Content>
        {items.map((item, index) => (
          <S.Item data={item} active={item.href === activeRoute} key={index} />
        ))}
      </S.Content>

    </S.Container>
  )
}

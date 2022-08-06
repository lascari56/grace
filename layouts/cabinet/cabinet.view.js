import React from 'react'

import CabinetHeader from './components/header'

import CabinetMenu from './components/menu'

import * as S from './cabinet.styled'

export default function CabinetView({children, title}) {
  return (
    <S.Container>
      <CabinetMenu/>
      
      <S.Content>
        <CabinetHeader>
          <S.Title>{title}</S.Title>
        </CabinetHeader>

        {children}
      </S.Content>
    </S.Container>
  )
}

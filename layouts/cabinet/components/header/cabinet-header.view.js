import React from 'react'

import * as S from './cabinet-header.styled'

export default function CabinetHeaderView({title,children}) {
  return (
    <S.Container>

      {children}

      <S.Content>

        <S.Search>
          <S.Input placeholder='Search...'/>

          <S.SearchIcon/>
        </S.Search>

        <S.Notification/>

        <S.Avatar>
          <S.AvatarIcon src='/images/avatar.jpg'/>
        </S.Avatar>
      </S.Content>
    </S.Container>
  )
}

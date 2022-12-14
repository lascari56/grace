import React from 'react'

import { Search } from '@components'

import * as S from './cabinet-header.styled'

import Link from "next/link"

export default function CabinetHeaderView({title,children}) {
  return (
    <S.Container>

      {children}

      <S.Content>

        <Search/>

        <S.Notification/>

        <Link href="/settings">
          <S.Avatar>
            <S.AvatarIcon src='/images/avatar.jpg'/>
          </S.Avatar>
        </Link>
      </S.Content>
    </S.Container>
  )
}

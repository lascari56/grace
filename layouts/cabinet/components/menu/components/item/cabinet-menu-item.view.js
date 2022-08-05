import React from 'react'

import Link from 'next/link'

import * as S from './cabinet-menu-item.styled'

export default function CabinetMenuItemView({data, className}) {
  return (
    <Link href={data.href}>
      <S.Container className={className}>
        <S.Icon>{data?.icon}</S.Icon>

        <S.Title>{data?.title}</S.Title>
      </S.Container>
    </Link>
  )
}

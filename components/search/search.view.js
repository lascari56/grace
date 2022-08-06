import React from 'react'

import * as S from './search.styled'

export default function SearchView() {
  return (
    <S.Container>
      <S.Input placeholder='Search...'/>

      <S.SearchIcon/>
    </S.Container>
  )
}

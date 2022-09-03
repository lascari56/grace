import React from 'react'

import Select from '../../../select'
import FilterSVG from './image/filter'

import Button from '../../../button'

import * as S from './table-header.styled'

export default function TableHeaderView() {
  return (
    <S.Container>
      <Select theme='dark'/>

      <S.Content>
        <S.Search>
          <S.Input placeholder='Search in table...'/>

          <S.SearchIcon/>
        </S.Search>

        <S.Filter>
          <FilterSVG/>

          <S.FilterTitle>Filter</S.FilterTitle>
        </S.Filter>

        <Button title='+ Add' size='small'/>

      </S.Content>
    </S.Container>
  )
}

import React from 'react'

import { Table } from '@components'

import LayoutsCabinet from '../../layouts/cabinet'

import * as S from './users.styled'

export default function UsersView() {
  return (
    <LayoutsCabinet title='Users'>
      <Table/>
    </LayoutsCabinet>
  )
}

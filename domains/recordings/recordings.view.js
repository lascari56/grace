import React from 'react'

import { Table } from '@components'

import LayoutsCabinet from '../../layouts/cabinet'

import * as S from './recordings.styled'

export default function RecordingsView() {
  return (
    <LayoutsCabinet title='All recordings'>
      <Table/>
    </LayoutsCabinet>
  )
}

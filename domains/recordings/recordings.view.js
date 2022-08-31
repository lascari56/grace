import React from 'react'

import { Table } from '@components'

import * as S from './recordings.styled'

export default function RecordingsView({data}) {
  console.log("data", data);

  return (
    <Table
      data={data}
    />
  )
}

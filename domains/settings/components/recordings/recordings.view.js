import React from 'react'

import Link from 'next/link'

import UploadSVG from './image/upload'

import * as S from './recordings.styled'

const items = [
  {
    title:'Recording No.33',
    status:'Analyzing...',
    time: '2:30 PM - 2:33 PM'
  },
  {
    title:'Recording No.32',
    status:'Nice and clean',
    time: '4:11 PM - 4:15 PM'
  },
  {
    title:'Recording No.31',
    status:'Please call your doctor!',
    time: '6:55 PM - 7:02 PM'
  },
  {
    title:'Recording No.31',
    status:'Please call your doctor!',
    time: '6:55 PM - 7:02 PM'
  },
]

export default function RecordingsView() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Recordings</S.Title>

        <Link href='/recordings'>
          <S.All>All recordings</S.All>
        </Link>
      </S.Header>

      <S.Content>
        {items.map((item, index) => (
            <S.Item key={index} data={item}/>
          ))}
        </S.Content>

        <S.Footer>
          <UploadSVG/>

          <S.Date>21.06.2022  / 19:06</S.Date>

          <S.Button title='Save'/>
        </S.Footer>
    </S.Container>
  )
}

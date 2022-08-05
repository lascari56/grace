import React from 'react'

import * as S from './profile-status.styled'

const items = [
  {
    title: 'Signed Terms of use'
  },
  {
    title: 'Signed Privacy Policy'
  }
]

export default function SettingsProfileStatusView() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Status</S.Title>

        <S.Button theme='outline-green' title='Active' size='small'/>
      </S.Header>

      {items.map((item, index) => (
          <S.Item key={index} data={item}/>
        ))}
    </S.Container>
  )
}

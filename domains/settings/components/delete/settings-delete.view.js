import React from 'react'

import * as S from './settings-delete.styled'

export default function SettingsDeleteView() {
  return (
    <S.Container>
      <S.Title>Delete data</S.Title>

      <S.Button title='Delete Account & Data' theme='outline-red' size='big'/>
    </S.Container>
  )
}

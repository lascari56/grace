import React from 'react'

import SettingsDelete from './components/delete'

import * as S from './settings.styled'

export default function SettingsView({user}) {
  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <S.Profile user={user} />
        </S.Column>

        <S.Column>
          <S.Recording/>
        </S.Column>
      </S.Row>

      <S.Row>
        <S.Column>
          <S.Stats/>
        </S.Column>

        <S.Column>
          <S.Status/>

          <SettingsDelete/>
        </S.Column>
      </S.Row>
    </S.Container>
  )
}

import React from 'react'

import SettingsProfile from './components/profile'
import SettingsStats from './components/stats'
import SettingStatus from './components/status'
import SettingsRecording from './components/recordings'
import SettingsDelete from './components/delete'

import * as S from './settings.styled'

export default function SettingsView() {
  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <SettingsProfile/>
        </S.Column>

        <S.Column>
          <SettingsRecording/>
        </S.Column>
      </S.Row>

      <S.Row>
        <S.Column>
          <SettingsStats/>
        </S.Column>

        <S.Column>
          <SettingStatus/>

          <SettingsDelete/>
        </S.Column>
      </S.Row>
    </S.Container>
  )
}

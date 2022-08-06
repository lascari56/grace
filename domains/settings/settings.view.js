import React from 'react'

import CabinetLayouts from '../../layouts/cabinet'
import SettingsProfile from './components/profile'
import SettingsStats from './components/stats'
import SettingStatus from './components/status'
import SettingsRecording from './components/recordings'
import SettingsDelete from './components/delete'

import * as S from './settings.styled'

export default function SettingsView() {
  return (
    <CabinetLayouts title='Settings'>
      <S.Container>
        <S.Column>
          <SettingsProfile/>

          <SettingsStats/>
        </S.Column>

        <S.Column>
          <SettingsRecording/>

          <SettingStatus/>

          <SettingsDelete/>
        </S.Column>
      </S.Container>
    </CabinetLayouts>
  )
}

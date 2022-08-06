import React from 'react'

import SettingProfileForm from './components/form'

import * as S from './settings-profile.styled'

export default function SettingsProfileView() {
  return (
    <S.Container>
      <S.Title>Profile ID # 91284</S.Title>

      <S.Content>
        <S.Avatar/>

        <SettingProfileForm/>
      </S.Content>
    </S.Container>
  )
}

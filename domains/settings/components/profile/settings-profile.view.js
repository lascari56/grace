import React from 'react'

import SettingProfileForm from './components/form'

import * as S from './settings-profile.styled'

export default function SettingsProfileView({ className, user }) {
  return (
    <S.Container className={className}>
      <S.Title>Profile ID #{user?._id}</S.Title>

      <S.Content>
        <S.Avatar/>

        <SettingProfileForm user={user}/>
      </S.Content>
    </S.Container>
  )
}

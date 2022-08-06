import React from 'react'

import { Button } from '@components'

import * as S from './settings-profile-avatar.styled'

export default function SettingsProfileAvatarView() {
  return (
    <S.Container>
      <S.Avatar src='/images/avatar.jpg'/>

      <Button title='Change' size="small" theme="outline-green"/>
    </S.Container>
  )
}

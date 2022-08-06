import React from 'react'

import * as S from './settings-profile-form.styled'

export default function SettingsProfileFormView({className}) {
  return (
    <S.Container className={className}>
      <S.Row>
        <S.Input title='First Name' size='small' placeholder='John'/>

        <S.Input title='Last Name' size='small' placeholder='Doe'/>
      </S.Row>

      <S.Input title='Date of Birth' placeholder='28 February 1996 (age 26)'/>

      <S.Input title='Phone Number' placeholder='+1283716291'/>

      <S.Input title='Email address' placeholder='johndoe@gmail.com'/>

      <S.Input title='Localization' placeholder='Canada, Ontario'/>

      <S.Button title='Save'/>
    </S.Container>
  )
}

import React from 'react'

import * as S from './settings-profile-form.styled'

export default function SettingsProfileFormView() {
  return (
    <S.Container>
      <S.Data>
        <S.Input theme='violet' title='First Name' size='small' placeholder='John'/>

        <S.Input theme='violet' title='Last Name' size='small' placeholder='Doe'/>
      </S.Data>

      <S.Input theme='violet' title='Date of Birth' placeholder='28 February 1996 (age 26)'/>

      <S.Input theme='violet' title='Phone Number' placeholder='+1283716291'/>

      <S.Input theme='violet' title='Email address' placeholder='johndoe@gmail.com'/>

      <S.Input theme='violet' title='Localization' placeholder='Canada, Ontario'/>

      <S.Button title='Save'/>
    </S.Container>
  )
}

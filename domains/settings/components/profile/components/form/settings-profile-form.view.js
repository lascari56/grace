import React from 'react'

import * as S from './settings-profile-form.styled'

export default function SettingsProfileFormView({className, user}) {
  return (
    <S.Container className={className}>
      <S.Row>
        <S.Input theme='violet' title='First Name' size='small' placeholder='John'/>

        <S.Input theme='violet' title='Last Name' size='small' placeholder='Doe'/>
      </S.Row>

      <S.Row>
        <S.Input theme='violet' title='Date of Birth' placeholder='28 February 1996 (age 26)'/>
      </S.Row>
      
      <S.Row>
        <S.Input theme='violet' title='Phone Number' placeholder='+1283716291'/>
      </S.Row>

      <S.Row>
        <S.Input theme='violet' title='Email address' placeholder='johndoe@gmail.com'/>
      </S.Row>

      <S.Row>
        <S.Input theme='violet' title='Localization' placeholder='Canada, Ontario'/>
      </S.Row>

      <S.Button title='Save'/>
    </S.Container>
  )
}

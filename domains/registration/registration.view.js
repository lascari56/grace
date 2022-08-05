import React from 'react'

import Layouts from '../../layouts/auth'
import RegistrationForm from './components/form'

import * as S from './registration.styled'

export default function RegistrationView() {
  return (
    <Layouts title='Create an account' description='Create an account to use dashboard'>
      <RegistrationForm/>
    </Layouts>
  )
}

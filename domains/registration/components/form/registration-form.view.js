import React from 'react'

import Link from 'next/link'

import * as S from './registration-form.styled'

export default function LoginFormView() {
  return (
    <S.Container>
      <S.Form>
        <S.Info>
          <S.Input title='First Name' placeholder='Surya' size='small'/>

          <S.Input title='Last Name' placeholder='Wiguna' size='small'/>
        </S.Info> 

        <S.Input title='Email address' placeholder='suryawigunaa@gmail.com'/>

        <S.Input type='password' title='Password' placeholder='Password'/>

        <S.Input type='password' title='Confirm Password' placeholder='Password'/>

        <S.Forgot>Forgot password?</S.Forgot>

        <S.Button>Sign In</S.Button>
      </S.Form>

      <S.Description>Already have an account? <Link href='/login'>Sign in here</Link></S.Description>
    </S.Container>
  )
}

import React from 'react'

import Link from 'next/link';

import * as S from './login-form.styled'

// const services=[
//   {
//     key: "registration",
//     route: "/registration",
//     title:'Create an account'
//   }
// ]

export default function LoginFormView() {
  return (
    <S.Container>
      <S.Form>
        <S.Title>Email address</S.Title>

        <S.Input placeholder='Email'/>

        <S.Title>Password</S.Title>

        <S.Input placeholder='Password' type='password'/>

        <S.Forgot>Forgot password?</S.Forgot>

        <S.Button size='big' title='Sign In'/>
      </S.Form>

      <S.Description>Don’t have an account? <Link href="/registration">Register here</Link></S.Description>
    </S.Container>
  )
}

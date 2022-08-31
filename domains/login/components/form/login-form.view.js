import React from 'react'

import Link from 'next/link';

import * as S from './login-form.styled'

export default function LoginFormView({formik, loading, isValid, validItems}) {
  return (
    <S.Container>
      <S.Form>
        <S.Title>Email address</S.Title>

        <S.Input 
          placeholder='Email'
          value={formik.values.email}
          isValid={validItems.email}
          onChange={event => formik.setFieldValue('email', event.target.value)}
          // onChange={value => formik.setFieldValue('email', value)}
        />

        <S.Title>Password</S.Title>

        <S.Input
          placeholder='Password'
          type='password'
          value={formik.values.password}
          isValid={validItems.password}
          onChange={event => formik.setFieldValue('password', event.target.value)}
        />

        {/* <S.Forgot>Forgot password?</S.Forgot> */}

        <S.Button 
          size='big'
          title='Sign In'
          disabled={loading || !isValid}
          onClick={formik.handleSubmit}
        />
      </S.Form>

      <S.Description>Don’t have an account? <Link href="/registration">Register here</Link></S.Description>
    </S.Container>
  )
}

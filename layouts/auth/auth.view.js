import React from 'react';

import LogoSVG from './images/logo'
import GoogleSVG from './images/google'
import FacebookSVG from './images/facebook'

import * as S from "./auth.styled"

const AuthView = ({children, title, description}) => {
  return (
    <S.Container>
      <S.Preview>
        <LogoSVG/>
      </S.Preview>

      <S.Body>
        <S.Content>
          <S.Header>
            <S.Title>{title}</S.Title>

            <S.Description>{description}</S.Description>

            {/* <S.Social>
              <S.Item>
                <GoogleSVG/>

                <S.Sing>Sign in with Google</S.Sing>
              </S.Item>

              <S.Item>
                <FacebookSVG/>

                <S.Sing>Sign in with Facebook</S.Sing>
              </S.Item>
            </S.Social> */}
          </S.Header>

          {children}
        </S.Content>
      </S.Body>
    </S.Container>
  );
}

export default AuthView;

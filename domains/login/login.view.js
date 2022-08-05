import React from 'react';

import Layouts from '../../layouts/auth'
import LoginForm from './components/form'

import * as S from "./login.styled"

const LoignView = () => {
  return (
    <S.Container>
      <Layouts title='Sign In' description='Sign in to your account'>
        <LoginForm/>
      </Layouts>
    </S.Container>
  );
}

export default LoignView;

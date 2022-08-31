import React from 'react';

import LoginForm from './components/form'

import * as S from "./login.styled"

const LoignView = ({
  formik,
  loading,
  validItems,
  isValid
}) => {
  return (
    <LoginForm
      formik={formik}
      loading={loading}
      validItems={validItems}
      isValid={isValid}
    />
  );
}

export default LoignView;

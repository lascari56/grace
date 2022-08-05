import React from "react";

import Registartion from "@domains/registration";

import AuthLayouts from "../layouts/auth"

function LoginScreen(props) {
  return (
    <Registartion {...props} />
  );
}

LoginScreen.getLayout = function getLayout(page) {
  return (
    <AuthLayouts
      title="Create an account"
      description="Create an account to use dashboard"
    >{page}</AuthLayouts>
  )
}

export default LoginScreen;
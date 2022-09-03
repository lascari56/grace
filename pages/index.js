import React from "react";

import Login from "@domains/login";

import AuthLayouts from "../layouts/auth"

function LoginScreen(props) {
  return (
    <Login {...props} />
  );
}

LoginScreen.getLayout = function getLayout(page) {
  return (
    <AuthLayouts
      title="Sign In"
      description="Sign in to your account"
    >{page}</AuthLayouts>
  )
}

export default LoginScreen;
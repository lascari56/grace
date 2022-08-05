import React from "react";

import Users from "@domains/users";

import CabinetLayouts from "../layouts/cabinet"

function UsersScreen(props) {
  return (
    <Users  {...props} />
  );
}

UsersScreen.getLayout = function getLayout(page) {
  return (
    <CabinetLayouts title='Users'>{page}</CabinetLayouts>
  )
}

export default UsersScreen;
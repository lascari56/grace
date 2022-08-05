import React from "react";

import Dashboard from "@domains/dashboard";

import CabinetLayouts from "../layouts/cabinet"

function DashboardScreen(props) {
  return (
    <Dashboard {...props} />
  );
}

DashboardScreen.getLayout = function getLayout(page) {
  return (
    <CabinetLayouts title='Dashboard'>{page}</CabinetLayouts>
  )
}

export default DashboardScreen;
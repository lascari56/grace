import React from "react";

import Settings from "@domains/settings";

import CabinetLayouts from "../layouts/cabinet"

function SettingsdScreen(props) {
  return (
    <Settings  {...props} />
  );
}

SettingsdScreen.getLayout = function getLayout(page) {
  return (
    <CabinetLayouts title='Settings'>{page}</CabinetLayouts>
  )
}

export default SettingsdScreen;
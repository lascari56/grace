import React from "react";

import Cabinet from "../layouts/cabinet";

import CabinetLayouts from "../layouts/cabinet"

function CabinetScreen(props) {
  return (
    <Cabinet {...props} />
  );
}

CabinetScreen.getLayout = function getLayout(page) {
  return (
    <CabinetLayouts>{page}</CabinetLayouts>
  )
}

export default CabinetScreen;
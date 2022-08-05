import React from "react";

import Recordings from "@domains/recordings";

import CabinetLayouts from "../layouts/cabinet"

function RecordingsScreen(props) {
  return (
    <Recordings  {...props} />
  );
}

RecordingsScreen.getLayout = function getLayout(page) {
  return (
    <CabinetLayouts title='Recordings'>{page}</CabinetLayouts>
  )
}

export default RecordingsScreen;
import React, {useState, useMemo, useEffect} from 'react';

import TableView from "./table.view"

import {useTable} from "@hooks/useTable"

const TableContainer = ({...props}) => {
  const openFile = (link) => {
    window.open(link, '_blank');
  };

  return (
    <TableView
      {...props}
      handleOpenFile={openFile}
    />
  );
}

export default TableContainer;

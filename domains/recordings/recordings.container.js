import React, {useState, useMemo, useEffect} from 'react';

import RecordingsView from "./recordings.view"

import {useTable} from "@hooks/useTable"

const RecordingsContainer = ({...props}) => {
  const table = useTable({entry: "recordings", pageSize: 10, query: {user: "all"}})

  const data = useMemo(
    () => {
      // return Object.values(table?.response);
      if (!table?.response?.data?.length) {
        return []
      }

      return table?.response?.data?.map(item => {
        const _item = {...item}

        return _item;
      })
    },
    [table?.response]
  )

  return (
    <RecordingsView
      {...props}
      data={data}
      table={table}
    />
  );
}

export default RecordingsContainer;

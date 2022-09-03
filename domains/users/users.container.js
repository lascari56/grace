import React, {useState, useMemo, useEffect} from 'react';

import UsersView from "./users.view"

import {useTable} from "@hooks/useTable"

const UsersContainer = ({...props}) => {
  const table = useTable({entry: "users", pageSize: 10})

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
    <UsersView
      {...props}
      data={data}
      table={table}
    />
  );
}

export default UsersContainer;

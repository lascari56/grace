import React, {useMemo} from 'react'

import { Table } from '@components'

import moment from "moment"

import * as S from './users.styled'

export default function UsersView({data, table}) {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: '_id',
      },
      // {
      //   Header: 'Name',
      //   accessor: 'name',
      // },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({row}) => <p>{row.original.name} {row.original.surname}</p>
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({value}) => <p>{moment(value).format("YYYY-MM-DD HH:SS")}</p>,
      },
    ],
    []
  )

  return (
    <Table 
      data={data}
      columns={columns}
      page={table?.page}
      total={table?.response?.total}
      pageCount={table?.pageCount}
      loading={table?.loading}
      // HeaderComponent={<TableHeader title="Logs payments" RightComponent={!!statistics?.data && <LogsStatistic statistics={statistics} />} />}
      onChangePage={table?.onChangePage}
    />
  )
}

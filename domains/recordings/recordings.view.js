import React, {useMemo} from 'react'
import moment from "moment"

import { Table, Button } from '@components'

import RecordingsActions from './components/actions'

export default function RecordingsView({data, table}) {
  console.log("data", data);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: '_id',
      },
      {
        Header: 'Duration',
        accessor: 'duration',
      },
      {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({value}) => <p>{moment(value).format("YYYY-MM-DD HH:SS")}</p>,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({row}) => (
          <RecordingsActions data={row.original} />
        ),
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

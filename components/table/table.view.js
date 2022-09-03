import React from 'react';

import TableSearch from "./components/search"
import TableHeader from "./components/header"

import { ThreeCircles } from 'react-loader-spinner'

import { useTable, useSortBy } from 'react-table'

import * as S from "./table.styled"

const TableView = ({className, columns, data, page, total, pageCount, loading, search, disableSortBy = true, HeaderComponent, onSearch, onChangePage}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, disableSortBy  }, useSortBy)

  return (
    
    <S.Container className={className} loading={+loading} isFull={!data?.length}>
      {/* {HeaderComponent} */}
      <TableHeader />
      
      {(!!data?.length || !!search) && (
        <>
          <S.Body>
            <S.Content>
              <S.Table {...getTableProps()}>
                <thead>
                  {headerGroups?.map((headerGroup, indexGroup) => (
                    <tr key={indexGroup} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup?.headers?.map((column, indexColumn) => (
                        <th key={indexColumn} {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}

                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows?.map((row, indexRow) => {
                    prepareRow(row)
                    return (
                      <tr key={indexRow} {...row.getRowProps()}>
                        {row?.cells?.map((cell, indexCell) => {
                          return (
                            <td key={indexCell} {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </S.Table>
            </S.Content>
            
            {!!onSearch && <TableSearch onSearch={onSearch} />}
          </S.Body>

          {pageCount > 1 && <S.Pagination value={page} total={total} pageCount={pageCount} onChange={onChangePage} />}
        </>
      )}

      {loading && ( 
        <S.Loader>
          <ThreeCircles color="#1D0F40" width={40} height={40} />
        </S.Loader>
      )}
    </S.Container>
  );
}

export default TableView;

import React from 'react'

import TableHeader from './components/header'

import { Button } from '@components';

import * as S from './table.styled'

export default function TableView({data, handleOpenFile}) {
  return (
    <S.Container>
      <TableHeader/>
        <S.Table>
          <tr>
            <th>ID</th>
            <th>Duration</th>
            <th style={{textAlign: "center"}}>Actions</th>
            {/* <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Phone #</th> */}
          </tr>

          {!!data && !!data.length && data.map(item => (<tr>
            <td>{item?._id}</td>
            
            <td>{item?.duration}</td>

            <td style={{display: "flex", justifyContent: "center"}}>
              <Button
                // style={{width: 50}}
                title="Open file"
                size="small"
                onClick={() => handleOpenFile(item.file)}
              />
            </td>
            {/* <td>Michelle Dan</td>
            <td>michelle@dan.co</td>
            <td>912 678 841 345</td> */}
          </tr>))}
        </S.Table>

        <S.Pagination/>
    </S.Container>
  )
}

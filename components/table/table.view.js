import React from 'react'

import TableHeader from './components/header'

import * as S from './table.styled'

export default function TableView() {
  return (
    <S.Container>
      <TableHeader/>
        <S.Table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
            <th>Phone #</th>
          </tr>
          <tr>
            <td>Michelle Dan</td>
            <td>michelle@dan.co</td>
            <td>91284</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>912 678 841 345</td>
          </tr>

        </S.Table>

        <S.Pagination/>
    </S.Container>
  )
}

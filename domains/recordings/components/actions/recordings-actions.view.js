import React from 'react'

import { Button } from '@components'

import * as S from './recordings-actions.styled'

export default function TableHeaderView({data, onOpenFile}) {
  return (
    <S.Container>
      <Button
        title="Open file"
        size="small"
        onClick={() => onOpenFile(data.file)}
      />
    </S.Container>
  )
}

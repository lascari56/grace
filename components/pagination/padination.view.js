import React from 'react'

import {Icon} from "@components"

import * as S from "./padination.styled"

export default function PadinationView({className, children, localValue, value, total, pageCount, onNext, onPrev, onBlur, onChange, onKeyUp}) {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Item disabled={value === 0} onClick={onPrev}>
          <Icon name="arr-left" size={12} />
        </S.Item>

        <S.Item disabled={value === total} onClick={onNext}>
          <Icon name="arr-right" size={12} />
        </S.Item>

        {/* <S.Inner size="small" theme="white" value={localValue} onChange={onChange} onBlur={onBlur} onSubmit={onBlur} onKeyPress={onKeyUp} /> */}
      </S.Content>

      {children}

      <S.Meta>Showing {value} to {pageCount} of {total} entries</S.Meta>
    </S.Container>
  )
}

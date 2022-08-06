import styled from "styled-components"

import { Input as InputCustom, Button as ButtonCustom } from '@components'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled(InputCustom)`
  :not(:last-child) {
    margin-bottom: ${responsiveSize(20)};
  }
`

export const Button = styled(ButtonCustom)`
  margin-left: auto;
`
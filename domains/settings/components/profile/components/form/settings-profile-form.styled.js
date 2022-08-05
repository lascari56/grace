import styled from "styled-components"

import { Input as InputCustom } from '@components'
import {Button as ButtonCustom} from '@components'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-left: ${responsiveSize(43)};
  display: flex;
  flex-direction: column;
`

export const Data = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled(InputCustom)`
  margin-bottom: ${responsiveSize(20)};
`

export const Button = styled(ButtonCustom)`
  margin-left: auto;
`
// ${responsiveSize(30)}
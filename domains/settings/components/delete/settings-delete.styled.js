import styled from "styled-components"

import { Button as ButtonCustom } from '@components'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${responsiveSize(30)} ${responsiveSize(40)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #AF0000;
`

export const Button = styled(ButtonCustom)`
  margin-top: ${responsiveSize(30)};

  width: ${responsiveSize(254)};
`
import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(30)} ${responsiveSize(40)} ${responsiveSize(42)} ${responsiveSize(40)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`
export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

export const Content = styled.div`
  margin-top: ${responsiveSize(30)};

  display: flex;
`
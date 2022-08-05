import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(27)};
  padding: ${responsiveSize(30)} ${responsiveSize(27)} ${responsiveSize(15)} ${responsiveSize(40)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

// ${responsiveSize(30)}
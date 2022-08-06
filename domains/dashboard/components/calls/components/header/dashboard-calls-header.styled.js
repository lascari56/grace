import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
 
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(5)};

  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

// ${responsiveSize(588)}
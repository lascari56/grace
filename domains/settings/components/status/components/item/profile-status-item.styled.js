import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: rgba(0, 0, 0, 0.51);
`

export const Indicator = styled.div`
  background-color: #66D055;

  width: 44px;
  height: 20px;
  border-radius: 15px;
`


// ${responsiveSize(30)}
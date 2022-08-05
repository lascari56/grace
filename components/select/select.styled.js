import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Select = styled.div`
  display: flex;
  align-items: center;
`

export const Date = styled.select`
  margin-right: ${responsiveSize(5)};

  font-weight: 400;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(15)};

  color: #858585;

  border: none;

  appearance: none;
`


// ${responsiveSize(30)}
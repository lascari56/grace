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

  ${props => props.theme === 'dark' && `
    font-weight: 700;
    font-size: ${responsiveSize(18)};
    line-height: ${responsiveSize(22)};
    color: #000000;
  `}
`


// ${responsiveSize(30)}
import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Icon = styled.div`
  width: ${responsiveSize(18)};
  height: ${responsiveSize(18)};
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s;
`

export const Container = styled.div`
  padding: ${responsiveSize(20)} 0;
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;

    ${Icon} {
      transform: rotate(360deg);
    }
  }
`

export const Title = styled.span`
  margin-left: ${responsiveSize(20)} ;

  font-size: ${responsiveSize(18)} ;
  line-height: ${responsiveSize(22)} ;
  color: #FFFFFF;

  ${props => props.active && `font-weight: 700;`}
`
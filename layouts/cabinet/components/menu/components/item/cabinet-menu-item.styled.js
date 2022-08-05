import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(20)} 0;

  display: flex;
  align-items: center;
`

export const Icon = styled.div`
`


export const Title = styled.span`
  margin-left: ${responsiveSize(20)} ;

  font-size: ${responsiveSize(18)} ;
  line-height: ${responsiveSize(22)} ;

  color: #FFFFFF;
`

// ${responsiveSize(40)} 
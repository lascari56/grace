import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(40)};

  padding: ${responsiveSize(30)} ${responsiveSize(40)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`

export const Content = styled.div`
 overflow-y: auto;
 margin-top: ${responsiveSize(16)};
 
 ::-webkit-scrollbar{
  display: none;
 }
`
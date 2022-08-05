import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  :last-child{  
    margin-left: ${responsiveSize(40)};
    flex:1; 
  }

  :first-child{
    flex:1.1;
  }
`

// ${responsiveSize(30)}
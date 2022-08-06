import styled from "styled-components"

import DashboardCallsTableItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(16)};

  max-height: ${responsiveSize(359)};

`

export const Item = styled(DashboardCallsTableItem)`
  :nth-child(2n){
    background-color: rgba(100, 36, 251, 0.05);
  }

  :nth-child(2n-1){
    background-color: rgba(100, 36, 251, 0.02);
  }

  border-radius: 10px;
  
`

// ${responsiveSize(588)}
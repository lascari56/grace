import styled from "styled-components"

import DashboardInfoItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  margin-top: ${responsiveSize(40)};
`

export const Item = styled(DashboardInfoItem)`
  flex: 1;

  :not(:last-child) {
    margin-right: ${responsiveSize(40)};
  }
`

// ${responsiveSize(588)}
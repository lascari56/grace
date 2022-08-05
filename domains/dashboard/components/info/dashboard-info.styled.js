import styled from "styled-components"

import DashboardInfoItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(40)};
`

export const Item = styled(DashboardInfoItem)`


`

// ${responsiveSize(588)}
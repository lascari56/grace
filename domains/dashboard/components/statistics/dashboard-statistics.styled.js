import styled from "styled-components"

import DashboardStatisticsItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Item = styled(DashboardStatisticsItem)`

`

// ${responsiveSize(588)}
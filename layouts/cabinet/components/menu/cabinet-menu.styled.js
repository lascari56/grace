import styled from "styled-components"

import CabinetMenuItem from './components/item'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(50)} ${responsiveSize(50)} ${responsiveSize(60)} ${responsiveSize(50)};

  background-color: #1D0F40;

  width: ${responsiveSize(280)};
  height: calc(100vh - ${responsiveSize(80)});
  border-radius: ${responsiveSize(30)};

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  margin: ${responsiveSize(30)} 0;
`

export const Item = styled(CabinetMenuItem)`
 
`


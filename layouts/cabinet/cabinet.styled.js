import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(40)} ${responsiveSize(60)} ${responsiveSize(40)} ${responsiveSize(40)};

  background-color: #F5F5F5;

  display: flex;

  min-height: 100vh;
`

export const Content = styled.div`
  margin: ${responsiveSize(20)} ${responsiveSize(60)} ${responsiveSize(40)} ${responsiveSize(60)};

  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #000000;
`
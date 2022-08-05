import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  height: 100vh;

  display: flex;
`

export const Preview = styled.div`
  background-color: #6424FB;
  width: ${responsiveSize(588)};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #F5F5F5;
`

export const Header = styled.div`
  
`

export const Title = styled.p`
  text-align: left;

  font-weight: 700;
  font-size: ${responsiveSize(36)};
  line-height: ${responsiveSize(44)};

  color: #000000;
`

export const Description = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #000000;
`

export const Social = styled.div`
  margin-top: ${responsiveSize(26)};

  display: flex;
`

export const Item = styled.div`
  padding: ${responsiveSize(8)} ${responsiveSize(21)};
  background-color: #FFFFFF;
  border-radius: ${responsiveSize(10)};

  display: flex;
  align-items: center;

  :not(:last-child){margin-right:${responsiveSize(16)}}
`

export const Sing = styled.span`
  margin-left: ${responsiveSize(16)};

  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(15)};

  color: #000000;
`
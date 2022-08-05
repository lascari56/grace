import styled from "styled-components"

import CircleSVG from './image/circle'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(30)} ${responsiveSize(40)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(20)};

  width: ${responsiveSize(480)};
`


export const Header = styled.div`
  display: flex;

  justify-content: space-between;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

export const Select = styled.div`
  display: flex;
  align-items: center;
`

export const Date = styled.select`
  margin-right: ${responsiveSize(5)};

  font-weight: 400;
  font-size: ${responsiveSize(12)};
  line-height: ${responsiveSize(15)};

  color: #858585;

  border: none;

  appearance: none;
`

export const Content = styled.div`
  margin-top: ${responsiveSize(30)};

  display: flex;
`

export const Icon = styled(CircleSVG)`
  border-radius: 50%;
`

// ${responsiveSize(588)}
import styled from "styled-components"

import ProfileStatusItem from './components/item'

import { Button as ButtonCustom } from "@components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(30)} ${responsiveSize(40)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(20)};

  /* width: 100%; */
`

export const Header = styled.div`
  margin-bottom: ${responsiveSize(30)};

  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

export const Button = styled(ButtonCustom)`
  
`

export const Item = styled(ProfileStatusItem)`
  margin-bottom: ${responsiveSize(20)};
`
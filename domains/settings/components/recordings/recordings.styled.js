import styled from "styled-components"

import RecordingsItem from './components/item'

import { Button as ButtonCustom } from '@components'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${responsiveSize(30)} 0px ${responsiveSize(40)} 0px;

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};

  overflow: hidden;
`

export const Header = styled.div`
  padding: 0px ${responsiveSize(40)};
  margin-bottom: ${responsiveSize(30)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(18)};
  line-height: ${responsiveSize(22)};

  color: #000000;
`

export const All = styled.span`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #6424FB;

  opacity: 0.5;

  cursor: pointer;
`

export const Item = styled(RecordingsItem)`
  margin-bottom: ${responsiveSize(20)};
`

export const Content = styled.div`
  padding: 0px ${responsiveSize(40)};
  height: ${responsiveSize(395)};

  overflow-y: scroll;
`

export const List = styled.div`
  ::-webkit-scrollbar{
    display: none;
  }
`

export const Footer = styled.div`
  padding: ${responsiveSize(24)} ${responsiveSize(40)} 0px;

  display: flex;
  align-items: center;
`

export const Date = styled.div`
  margin-left: ${responsiveSize(9)};

  font-weight: 700;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;

  opacity: 0.2;
`

export const Button = styled(ButtonCustom)`
  margin-left: auto;
`

// ${responsiveSize(30)}
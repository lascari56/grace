import styled from "styled-components"

import SearchSVG from './images/search'
import NotificationSVG from './images/notification'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-bottom: ${responsiveSize(20)};

  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(29)};

  color: #000000;
`

export const Content =styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
`

export const Search = styled.div`
  display: flex;

  position: relative;
`

export const Input = styled.input`
  padding: ${responsiveSize(9)} ${responsiveSize(15)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(10)};
`

export const SearchIcon = styled(SearchSVG)`
  position: absolute;

  right: ${responsiveSize(15)};
  top: ${responsiveSize(11)};
`

export const Notification = styled(NotificationSVG)`
  margin-left: ${responsiveSize(20)};
`

export const Avatar =styled.div`
  margin-left: ${responsiveSize(30)};
`

export const AvatarIcon = styled.img`
  border-radius: 50%;

  width: 30px;
  height: 30px;
`
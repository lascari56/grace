import styled from "styled-components"

import SearchSVG from './images/search'

import { responsiveSize } from "@utils/responsive";


export const Container = styled.div`
  display: flex;

  position: relative;
`

export const Input = styled.input`
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  padding: ${responsiveSize(9)} ${responsiveSize(15)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(10)};

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`

export const SearchIcon = styled(SearchSVG)`
  position: absolute;

  right: ${responsiveSize(15)};
  top: ${responsiveSize(11)};
`
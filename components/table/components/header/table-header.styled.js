import styled from "styled-components"

import SearchIconSVG from './image/search-icon'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-bottom: ${responsiveSize(35)};

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
`

export const Search = styled.div`
  display: flex;
  
  position: relative;
`

export const Input = styled.input`
  padding: ${responsiveSize(7)} ${responsiveSize(15)};

  background: rgba(100, 36, 251, 0.05);
  border-radius: ${responsiveSize(10)};
`

export const SearchIcon = styled(SearchIconSVG)`
  position: absolute;

  right: ${responsiveSize(15)};
  top: ${responsiveSize(9)};
`

export const Filter = styled.div`
  margin: 0px ${responsiveSize(20)};
  padding: ${responsiveSize(7)} ${responsiveSize(15)};

  background: #FFFFFF;
  border: 1px solid rgba(100, 36, 251, 0.15);
  border-radius: ${responsiveSize(10)};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilterTitle = styled.span`
  margin-left: ${responsiveSize(5)};

  font-weight: 700;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;
`

// ${responsiveSize(30)}
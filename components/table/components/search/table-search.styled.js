import styled from "styled-components";

// import Icon from "@components/icon"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  border-top: 1px solid #DFE7F0;
  background-color: #FAFBFC;
`

export const Inner = styled.input`
  position: relative;
  flex: 1;
  height: ${responsiveSize(52)};
  padding-left: ${responsiveSize(52)};

  background-color: transparent;

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(16)};

  z-index: 1;

  @media (max-width: 767.98px) {
    padding-left: ${responsiveSize(37)};
  }
`

// export const SearchIcon = styled(Icon)`
//   position: absolute;
//   width: ${responsiveSize(16)};
//   height: ${responsiveSize(16)};
//   left: ${responsiveSize(28)};

//   @media (max-width: 767.98px) {
//     left: ${responsiveSize(13)};
//   }
// `

export const Action = styled.div`
  cursor: pointer;
  height: ${responsiveSize(52)};
  padding: 0px ${responsiveSize(16)};
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s;

  :hover {
    transform: scale(0.8);
  }
`
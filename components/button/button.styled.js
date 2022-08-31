import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(10)} ${responsiveSize(36)};
  display: flex;
  align-items: center;
  justify-content: center;

  background: #6424FB;
  border-radius: ${responsiveSize(10)};
  border: 1px solid #6424FB;

  /* cursor: pointer; */
  transition: transform 0.4s;

  /* &:hover {
    transform: scale(0.95);
  } */

  ${props => props.size === 'small' && `
    padding: ${responsiveSize(0)} ${responsiveSize(18)}; 
    height:${responsiveSize(30)};
  `}

  ${props => props.size === 'big' && `
    padding: ${responsiveSize(0)} ${responsiveSize(27)}; 
    height:${responsiveSize(40)};
  `}

  ${props => props.theme === 'grey' && `
      border-color: #858585;
      background: transparent;
      color:#858585;
    `}

  ${props => props.theme === 'outline-green' && `
    border-color: #66D055;
    background: transparent;
  `}

  ${props => props.theme === 'outline-red' && `
    border-color: #AF0000;
    background: transparent;
  `}

  ${props => props.disabled && `opacity: 0.5;`}

  ${props => !props.disabled && `
    cursor: pointer;

    &:hover {
      transform: scale(0.95);
    }
  `}
`

export const Title = styled.span`
  font-weight: 700;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #FFFFFF;

  ${props => props.theme === 'grey' && `
      color:#858585;
    `}

  ${props => props.theme === 'outline-green' && `
    color: #66D055;
  `}

${props => props.theme === 'outline-red' && `
    color: #AF0000;
  `}
`
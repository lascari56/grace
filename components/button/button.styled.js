import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(10)} ${responsiveSize(36)};

  background: #6424FB;
  border-radius: ${responsiveSize(10)};
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #6424FB;

  ${props => props.size === 'small' && `
    padding: ${responsiveSize(0)} ${responsiveSize(18)}; 
    height:${responsiveSize(30)};
  `}

${props => props.size === 'big' && `
    padding: ${responsiveSize(0)} ${responsiveSize(27)}; 
    height:${responsiveSize(40)};
  `}

${props => props.theme === 'outline-green' && `
    border-color: #66D055;
    background: transparent;
  `}

  ${props => props.theme === 'outline-red' && `
    border-color: #AF0000;
    background: transparent;
  `}
`

export const Title = styled.span`
  font-weight: 700;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #FFFFFF;

  ${props => props.theme === 'outline-green' && `
    color: #66D055;
  `}

${props => props.theme === 'outline-red' && `
    color: #AF0000;
  `}
`

// ${responsiveSize(30)}  color: #AF0000;
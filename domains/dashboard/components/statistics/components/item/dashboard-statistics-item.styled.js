import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(20)} ${responsiveSize(20)} ${responsiveSize(20)} ${responsiveSize(25)};

  background: #DDEFE0;
  border-radius: ${responsiveSize(20)};

  display: flex;
  flex-direction: column;

  width: ${responsiveSize(221)};

  ${props => props.theme === 'yellow' && `background: #F4ECDD;`}
  ${props => props.theme === 'pink' && `background: #EFDADA;`}
  ${props => props.theme === 'violet' && `background: rgba(100, 36, 251, 0.15);`}

`

export const Icon = styled.div`
  margin-left: auto;
`

export const Content = styled.div`

`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(5)};

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;
`

export const Value = styled.p`
  font-weight: 700;
  font-size: ${responsiveSize(24)};
  line-height: ${responsiveSize(33)};

  color: #000000;
`

// ${responsiveSize(588)}
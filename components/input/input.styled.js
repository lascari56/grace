import styled from "styled-components";

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
` 
export const Title = styled.p`
  margin-bottom: ${responsiveSize(10)} ;

  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #000000;
`

export const Content = styled.div`
  position: relative;
`

export const Input = styled.input`
  padding: ${responsiveSize(10)} ${responsiveSize(15)};

  background-color: #F5F5F5;
  border-radius: ${responsiveSize(10)};

  width: ${responsiveSize(325)};

  ${props => props.size === 'small' && `width: ${responsiveSize(150)};`}
`

export const Eye = styled.div`
  position: absolute;

  right: 0px;
  bottom: ${responsiveSize(5)};
  right: ${responsiveSize(15)};
`
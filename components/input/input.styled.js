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
  width: 100%;
  padding: ${responsiveSize(10)} ${responsiveSize(15)};

  background-color: #F5F5F5;
  border-radius: ${responsiveSize(10)};
  border: 1px solid #F5F5F5;

  ${props => props.theme === 'violet' && `
    background-color: rgba(100, 36, 251, 0.05);
  `}

  ${props => props.isValid === false && 'border-color: #E03B4B;'}
`

export const Eye = styled.div`
  position: absolute;

  right: 0px;
  bottom: ${responsiveSize(5)};
  right: ${responsiveSize(15)};

  cursor: pointer;
`
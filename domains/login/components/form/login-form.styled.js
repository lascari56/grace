import styled from "styled-components";

import { Button as ButtonCustom } from '@components';

import Link from 'next/link';

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`

`

export const Form = styled.div`
  margin-top: ${responsiveSize(25)};
  padding: ${responsiveSize(30)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`;

export const Title = styled.p`
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #000000;
`

export const Input = styled.input`
  width: 100%;

  margin-top: ${responsiveSize(10)} ;
  margin-bottom: ${responsiveSize(20)} ;
  padding: ${responsiveSize(10)} ${responsiveSize(15)};

  background-color: #F5F5F5;
  border-radius: ${responsiveSize(10)};
  border: 1px solid #F5F5F5;

  ${props => props.isValid === false && 'border: 1px solid red;'}
`

export const Forgot = styled.p` 
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #6424FB;
`

// export const Button = styled.button`
//   padding: ${responsiveSize(9)};
//   margin-top: ${responsiveSize(20)};  

//   font-weight: 700;
//   font-size: ${responsiveSize(16)};
//   line-height: ${responsiveSize(19)};
//   text-align: center;

//   color: #FFFFFF;
//   width: 100%;

//   background: #6424FB;
//   border-radius: ${responsiveSize(10)};
//   border: none;

//   cursor: pointer;
// `

export const Description = styled.p`
  margin-top: ${responsiveSize(20)};

  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};
  text-align: center;

  color: #858585;
`

export const LinkCustom = styled.span`
  color: #6424FB;
`

export const Button = styled(ButtonCustom)`
  margin-top: ${responsiveSize(20)}; 
`
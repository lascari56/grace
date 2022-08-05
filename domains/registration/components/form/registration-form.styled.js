import styled from "styled-components";

import EyeOpenSVG from '../../../../components/input/images/eye-open'

import { responsiveSize } from "@utils/responsive";

import { Input as InputCuston } from "../../../../components";

export const Container = styled.div`

`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`


export const Form = styled.div`
  margin-top: ${responsiveSize(25)};
  padding: ${responsiveSize(30)};

  background-color: #FFFFFF;
  border-radius: ${responsiveSize(20)};

  position: relative;
`;

export const Input = styled(InputCuston)`
  margin-bottom: ${responsiveSize(20)};
`

export const EyeOpen = styled(EyeOpenSVG)`
  /* position: absolute; */
`

export const Forgot = styled.p` 
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};

  color: #6424FB;
`

export const Button = styled.button`
  padding: ${responsiveSize(9)};
  margin-top: ${responsiveSize(20)};  

  font-weight: 700;
  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};
  text-align: center;

  color: #FFFFFF;
  width: 100%;

  background: #6424FB;
  border-radius: ${responsiveSize(10)};
  border: none;

  cursor: pointer;
`

export const Description = styled.p`
  margin-top: ${responsiveSize(20)};

  font-size: ${responsiveSize(16)};
  line-height: ${responsiveSize(19)};
  text-align: center;

  color: #858585;
`

export const Link = styled.span`
  color: #6424FB;
`
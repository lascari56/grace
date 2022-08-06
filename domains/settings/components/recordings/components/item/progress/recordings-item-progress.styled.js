import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2.5px solid #6424FB;
  border-radius: 50%;

  width: ${responsiveSize(64)};
  height: ${responsiveSize(64)};
`

export const Percent = styled.span`
  margin-top: ${responsiveSize(3)};

  font-weight: 300;
  font-size: ${responsiveSize(7)};
  line-height: ${responsiveSize(8)};


  color: #000000;
`
import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(15)} ${responsiveSize(10)} ${responsiveSize(19)} ${responsiveSize(12)};

  background-color: #FFFFFF;
  box-shadow: 0px ${responsiveSize(8)} ${responsiveSize(12)} rgba(57, 23, 136, 0.15);
  border-radius: ${responsiveSize(8)};

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  :last-child{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.p`
  margin-bottom: ${responsiveSize(13)};

  font-weight: 600;
  font-size: ${responsiveSize(15)};
  line-height: ${responsiveSize(18)};

  color: #000000;
`

export const Status = styled.p`
  font-weight: 300;
  font-size: ${responsiveSize(10)};
  line-height: ${responsiveSize(12)};

  color: #000000;
`

export const Oclock = styled.div`
  margin-top: ${responsiveSize(14)};

  display: flex;
  align-items: center;
`

export const Time = styled.span`
  margin-left: ${responsiveSize(4)};

  font-weight: 300;
  font-size: ${responsiveSize(8)};
  line-height: ${responsiveSize(10)};

  color: #000000;
`
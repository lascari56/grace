import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
`

export const Item = styled.div`
  padding: ${responsiveSize(7)} ${responsiveSize(10)};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #EAEAEA;
  border-radius: ${responsiveSize(10)};
  color: #858585;

  :not(:last-child){
      margin-right: ${responsiveSize(5)};
    }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #858585
`
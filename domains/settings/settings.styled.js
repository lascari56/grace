import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Row = styled.div`
  display: flex;

  :not(:last-child) {
    margin-bottom: ${responsiveSize(27)};
  }
`

export const Column = styled.div`
  :first-child {
    flex: 1;

    margin-right: ${responsiveSize(40)};
  }

  :last-child {
    flex: 1;
  }
`
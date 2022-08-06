import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.img`
  width: ${responsiveSize(100)};
  height: ${responsiveSize(100)};

  margin-bottom: ${responsiveSize(12)};

  border-radius: 50%;
`
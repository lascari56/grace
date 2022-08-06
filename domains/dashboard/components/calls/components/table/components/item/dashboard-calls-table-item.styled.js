import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-bottom: ${responsiveSize(20)};
  padding: ${responsiveSize(13)} ${responsiveSize(30)};

  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  flex: 0.7;
`

export const Avatar = styled.img`
  width: ${responsiveSize(36)};
  height: ${responsiveSize(36)};
  
  border-radius: 50%;
`

export const Name = styled.span`
  flex: 1.1;

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;
`

export const Recording = styled.span`
  flex: 1.3;

  font-weight: 600;
  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;
`

export const Time = styled.span`
  flex: 1.3;

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000;
`

export const Status = styled.span`
  flex: 0.6;

  font-size: ${responsiveSize(14)};
  line-height: ${responsiveSize(17)};

  color: #000000
`

// ${responsiveSize(588)}
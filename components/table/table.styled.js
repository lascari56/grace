import styled from "styled-components";

import PaginationCustom from "@components/pagination"
import TableHeader from './components/header'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  padding: ${responsiveSize(40)} ${responsiveSize(50)};

  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: ${responsiveSize(20)};
  
  overflow: hidden;

  background-color: #fff;

  ${props => props.loading && `
    min-height: 80px;
  `}

  ${props => props.isFull && `
    flex-grow: 1;
  `}
`

export const Body = styled.div`
  /* width: 100%;
  border-radius: ${responsiveSize(20)};
  
  overflow: hidden;

  background-color: #fff; */
`

export const Content = styled.div`
  width: 100%;

  /* padding: ${responsiveSize(40)} ${responsiveSize(50)}; */

  overflow-x: auto;
`

export const Pagination = styled(PaginationCustom)`
  margin-top: ${responsiveSize(36)};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  /* padding: ${responsiveSize(40)} ${responsiveSize(50)}; */

  td, th{
    :first-child{
      border-top-left-radius: ${responsiveSize(10)};
      border-bottom-left-radius: ${responsiveSize(10)};

      padding-left: ${responsiveSize(20)};
    }
    :last-child{
      border-top-right-radius: ${responsiveSize(10)};
      border-bottom-right-radius: ${responsiveSize(10)};
    }
  }

  td {
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(42)};
  }

  th {
    text-align:left;

    background-color: #6424FB;
    font-weight: 700;
    font-size: ${responsiveSize(14)};
    line-height: ${responsiveSize(40)};

    color: #FFFFFF;
  }

  tr {
    margin-bottom: 10px;
    
    :nth-child(2n){
      background-color: rgba(100, 36, 251, 0.05);
    }

    :nth-child(2n-1){
      background-color: rgba(100, 36, 251, 0.02);
    }
  }
`

export const Hh = styled.th`
  /* padding: ${responsiveSize(15)} 0px; */

  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  white-space: pre-line;
`

export const Td = styled.td`
  /* padding: ${responsiveSize(10)} 0px; */
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  min-width: auto !important;

  white-space: pre-line;
`

export const Tr = styled.tr`
  margin-bottom: ${responsiveSize(10)};
  padding: ${responsiveSize(20)} ${responsiveSize(12)};

  background: rgba(100, 36, 251, 0.02);
  border-radius: 10px;

  /* padding: ${responsiveSize(10)} 0px;
  font-weight: 300;
  font-size: ${responsiveSize(14)};
  line-height: 150%;
  min-width: auto !important;

  white-space: pre-line; */
`

export const Label = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  min-height: ${responsiveSize(40)};
`

export const Loader = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
  /* flex: 1;
   */
`
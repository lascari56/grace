import styled from "styled-components"

import TablePagination from './components/pagination'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(19)};
  padding: ${responsiveSize(40)} ${responsiveSize(50)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};

  display: flex;
  flex-direction: column;
`

export const Table = styled.table`
  width: 100%;

  border-collapse:collapse;

  td, th{
    :first-child{
      border-top-left-radius: ${responsiveSize(10)};
      border-bottom-left-radius: ${responsiveSize(10)};
    }
    :last-child{
      border-top-right-radius: ${responsiveSize(10)};
      border-bottom-right-radius: ${responsiveSize(10)};
    }
    /* margin-bottom: ${responsiveSize(10)}; */
  }

  td{
    padding:${responsiveSize(15)} 0px ${responsiveSize(15)} ${responsiveSize(15)};
  }

  th{
    text-align:left;
    padding:${responsiveSize(15)} 0px ${responsiveSize(15)} ${responsiveSize(15)};

    background-color: #6424FB;
    font-weight: 700;
    line-height: ${responsiveSize(17)};

    color: #FFFFFF;
  }

  tr{
  :nth-child(2n){
    background-color: rgba(100, 36, 251, 0.05);
  }
  :nth-child(2n-1){
    background-color: rgba(100, 36, 251, 0.02);
  }
    }

`

export const Pagination = styled(TablePagination)`
  margin-left: auto;
  margin-top: ${responsiveSize(34)};
`


// ${responsiveSize(30)}
import styled from "styled-components"

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
  margin-top: ${responsiveSize(19)};
  padding: ${responsiveSize(40)} ${responsiveSize(50)};

  background: #FFFFFF;
  border-radius: ${responsiveSize(20)};
`

export const Table = styled.div`
  width: 100%;
  display: table;

  border-spacing: 0px ${responsiveSize(10)};

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

  tr{
    :nth-child(2n){
      background-color: rgba(100, 36, 251, 0.05);
    }
    :nth-child(2n-1){
      background-color: rgba(100, 36, 251, 0.02);
    }
  }
`

// export const Row = styled.div`
//   display: table-row;
//   padding: 10px;

//   box-sizing: border-box;

//   :nth-child(2n){
//     background-color: rgba(100, 36, 251, 0.05);
//   }
//   :nth-child(2n-1){
//     background-color: rgba(100, 36, 251, 0.02);
//   }

//   /* :not(:last-child) { */
//     /* margin-bottom: ${responsiveSize(10)}; */
//   /* } */
// `

// export const Cell = styled.div`
//   display: table-cell;

//   font-size: ${responsiveSize(14)};
//   line-height: ${responsiveSize(42)};
// `
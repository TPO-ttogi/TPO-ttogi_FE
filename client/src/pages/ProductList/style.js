import { keyframes } from "@emotion/react";
import styled from '@emotion/styled'

const toRight = keyframes`
   0% {
      transform: translate(0, 0);
   }
   25% {
      transform: translate(5px, 0);
   }
   50% {
      transform: translate(5px, 10px);
   }
   75% {
      transform: translate(0, 10px);
   }
   100% {
      transform: translate(0, 0);
   }
`;
const toLeft = keyframes`
   0% {
      transform: translate(0, 0);
   }
   25% {
      transform: translate(0px, 10);
   }
   50% {
      transform: translate(10px, 10px);
   }
   75% {
      transform: translate(10px, 0px);
   }
   100% {
      transform: translate(0, 0);
   }
`;



export const Container = styled.div`
   width:100%;
   height:100%;

`;

export const Header = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:20px;
`;


export const Circle1 = styled.div`
   position:absolute;
   bottom:-10px;
   left:-20px;;
   width:140px;
   height:150px;
   border-radius:50%;
   background-color:#FFF100;
   transition:transform 40s ease-in-out;
   transform: translate(10px, 10px);
   z-index:-1;
   animation: ${toRight} infinite;
   animation-fill-mode: both;
   animation-duration: 5s;
 
   
`
export const Circle2 = styled.div`
   position:absolute;
   top:300px;
   right:2px;
   width:120px;
   height:110px;
   border-radius:50%;
   background-color:#FFF100;
   z-index:-1;
   animation: ${toLeft} infinite;
   animation-fill-mode: both;
   animation-duration: 5s;
`

export const ContentArea=styled.div`
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 20px;
`


export const KeywordCell=styled.div`
   display:inline-block;
   height:20px;
   font-family:Inter;
   font-size:12px;
   color:#1D73BA;
   font-weight:bold;
   border:1px solid #1D73BA;
   border-radius:20px;
   background-color:#EAF6FF;
   padding-left:16px;
   padding-right:16px;
   padding-top:8px;
   padding-bottom:7px;
   margin-top: 10px;
`

export const TotalNumber=styled.div`
   font-weight:semi-bold;
   font-size:12px;
   margin-top:13px;
   margin-bottom:14px;
`

export const ProductListArea=styled.div`
   display:grid;
   grid-template-columns: repeat(2, 1fr);
   column-gap:30px;
   row-gap:25px;

`

export const ProductCell=styled.div`
   margin-bottom:26px;
   text-align:center;
`

export const ImageBox=styled.div`
   width:100%;
   padding-bottom:10px;
   padding-top:10px;
   border:1px solid #000000;
   text-align:center;
`

export const PageEnd=styled.div`
   width: 100%; 
   display: flex;
   margin-top: 26px;
`
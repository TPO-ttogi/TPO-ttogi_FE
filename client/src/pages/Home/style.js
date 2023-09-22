import { keyframes } from "@emotion/react";
import styled from '@emotion/styled'


const toRight = keyframes`
   0% {
      transform: translate(0, 0);
   }
   25% {
      transform: translate(10px, 0);
   }
   50% {
      transform: translate(10px, 10px);
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
const toBottom = keyframes`
   0% {
      transform: translate(0, 0);
   }
   25% {
      transform: translate(0, 0);
   }
   50% {
      transform: translate(20px, 20px);
   }
   75% {
      transform: translate(0, 0);
   }
   100% {
      transform: translate(0, 0);
   }
`;



export const CircleArea = styled.div`
   max-height:100px;
   z-index:1;
`


export const Circle1 = styled.div`
   position:absolute;
   top:-130px;
   left:-60%;
   width:306px;
   height:230px;
   border-radius:50%;
   background-color:#FFF100;
   transition:transform 40s ease-in-out;
   transform: translate(10px, 10px);
   z-index:-1;
   animation: ${toRight} infinite;
   animation-fill-mode: both;
   animation-duration: 4s;
 
   
`
export const Circle2 = styled.div`
   position:absolute;
   top:-180px;
   width:306px;
   height:244px;
   border-radius:50%;
   background-color:#FFF100;
   z-index:-1;
   animation: ${toBottom} infinite;
   animation-fill-mode: both;
   animation-duration: 5s;
`
export const Circle3 = styled.div`
   position:absolute;
   top:-100px;
   right:-70%;
   width:306px;
   height:234px;
   border-radius:50%;
   background-color:#FFF100;
   z-index:-1;
   animation: ${toLeft} infinite;
   animation-fill-mode: both;
   animation-duration: 4s;
`

export const ImageArea = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
   margin-bottom:36px;
   z-index:100;
   text-align: center;
   flex-wrap: wrap;
   justify-content: center;
`

export const KeywordCell = styled.div`
   display:inline-block;
   font-size:12px;
   padding-top:7px;
   padding-bottom:8px;
   padding-left:13px;
   padding-right:13px;
   margin-right:2px;
   margin-left:3px;
   border:solid 1px #000000;
   border-radius:20px;
   margin-bottom:7px;
`

export const FooterText = styled.div`
   width:100%;
   display:flex;
   justify-content: center;
   font-size:12px;
   margin-top:26px;
   margin-bottom:20px;
   margin-left:auto;
   margin-right:auto;
   padding-left:20px;
   padding-right:20px;

`
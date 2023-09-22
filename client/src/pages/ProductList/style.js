import styled from '@emotion/styled'

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
   padding-bottom:45%;
   padding-top:45%;
   border:1px solid #000000;
   text-align:center;
`

export const PageEnd=styled.div`
   width: 100%; 
   display: flex;
   margin-top: 26px;
`
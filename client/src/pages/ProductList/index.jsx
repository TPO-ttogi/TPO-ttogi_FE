import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Container, Header,Circle1, Circle2,  ContentArea, KeywordCell, TotalNumber, ProductListArea, ProductCell, ImageBox, PageEnd, } from './style.js';
import axios from "axios"

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keywordId = location.state;
  const [data,setData]=useState([]);
  const goToHome = () => {
    navigate("/")
  }
  const goBack = () => {
    navigate(-1);
  }

  const getData=async()=>{
    const response=await axios.get(`/keyword/${keywordId}`);
    setData(response.data)
  }
  useEffect(()=>{
    getData();

  },[])
  return (
    <Container>
      <Header>
        <img onClick={goBack} src="/assets/icon/back.svg" width={28} height={17} />
        <img onClick={goToHome} src="/assets/icon/home.svg" width={28} height={31} />
      </Header>
      {/* <img style={{ position: "absolute", top: 250, right: 0, zIndex: -1 }} src="/assets/image/product_list_circle.svg" />
      <img style={{ position: "absolute", bottom: -50, left: 0, zIndex: -1 }} src="/assets/image/product_list_circle2.svg" /> */}
      <Circle1></Circle1>
      <Circle2></Circle2>

      <ContentArea>
        <KeywordCell>after school</KeywordCell>
        <TotalNumber>Total {data?.length}</TotalNumber>
        <ProductListArea>
          {data?.map((item)=>  
          
            <ProductCell onClick={()=>navigate('/product',{state:item.id})}>
              <ImageBox>
      <img src={item.imageUrl} width="100%" height="130px" />
    </ImageBox>
    <div style={{ marginTop: "16px" }}>{item.name_en}</div>
  </ProductCell>
            
          )}
        

        </ProductListArea>
        <PageEnd >
          <img style={{ marginLeft: "auto", marginRight: "auto" }} src="/assets/image/product_list_end.svg" />
        </PageEnd>
      </ContentArea>
    </Container>
  );
};

export default ProductList;
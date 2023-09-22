import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, ContentArea, KeywordCell, TotalNumber, ProductListArea, ProductCell, ImageBox, PageEnd, } from './style.js';


const ProductList = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  }
  const goBack = () => {
    navigate(-1);
  }
  return (
    <Container>
      <Header>
        <img onClick={goBack} src="/assets/icon/back.svg" width={28} height={17} />
        <img onClick={goToHome} src="/assets/icon/home.svg" width={28} height={31} />
      </Header>
      <img style={{ position: "absolute", top: 250, right: 0, zIndex: -1 }} src="/assets/image/product_list_circle.svg" />
      <img style={{ position: "absolute", bottom: -50, left: 0, zIndex: -1 }} src="/assets/image/product_list_circle2.svg" />

      <ContentArea>
        <KeywordCell>after school</KeywordCell>
        <TotalNumber>Total 12</TotalNumber>
        <ProductListArea>
          <ProductCell >
            <ImageBox>
              <img src="/assets/icon/back.svg" width="30" height="auto" />
            </ImageBox>
            <div style={{ marginTop: "16px" }}>SNACK SHOP</div>
          </ProductCell>
          <ProductCell>
            <ImageBox>
              <img src="/assets/icon/back.svg" width="30" height="auto" />
            </ImageBox>
            <div style={{ marginTop: "16px" }}>SNACK SHOP</div>
          </ProductCell>

        </ProductListArea>
        <PageEnd >
          <img style={{ marginLeft: "auto", marginRight: "auto" }} src="/assets/image/product_list_end.svg" />
        </PageEnd>
      </ContentArea>
    </Container>
  );
};

export default ProductList;
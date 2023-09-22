import React from "react";
import { Container, Header, Keyword, Main } from "./style.js";

const Product = () => {
  return (
    <Container>
      <Header>
        <img src="/assets/icon/back.svg" width={28} height={17} />
        <img src="/assets/icon/home.svg" width={28} height={31} />
      </Header>
      <Keyword>after school</Keyword>
      <Main>
        <div className="title">Tteok bokki</div>
      </Main>
    </Container>
  );
};

export default Product;

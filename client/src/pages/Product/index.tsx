import React from "react";
import { Container, Header, Keyword, Main, Detail, BotText } from "./style.js";

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
        <div className="subTitle">(떡볶이)</div>
        <Detail>
          <img
            src="http://www.ottogi.co.kr/pds/product/2021-07-28_60726959[9].jpg"
            width={147}
            height={147}
          />
          <div className="name">SNACK SHOP RICE TTEOK-BOKKI</div>
        </Detail>
        <div className="leftTextBox">
          <BotText>우리 떡볶이 먹으러갈래?</BotText>
        </div>
      </Main>
    </Container>
  );
};

export default Product;

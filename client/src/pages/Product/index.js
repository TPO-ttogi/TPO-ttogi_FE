import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Keyword,
  Main,
  Detail,
  Message,
  LeftTextBox,
} from "./style.js";

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Header>
          <img
            src="/assets/icon/back.svg"
            width={28}
            height={17}
            onClick={() => navigate("/productList")}
          />
          <img
            src="/assets/icon/home.svg"
            width={28}
            height={31}
            onClick={() => navigate("/")}
          />
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
          <LeftTextBox>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
          <div className="rightTextBox" style={{ animationDelay: "1s" }}>
            <Message>떡볶이가 뭐야?</Message>
          </div>
          <LeftTextBox style={{ animationDelay: "2s" }}>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
          <div className="rightTextBox" style={{ animationDelay: "3s" }}>
            <Message>그거 맵지 않아?</Message>
          </div>
          <LeftTextBox style={{ animationDelay: "4s" }} className='big'>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
          <LeftTextBox style={{ animationDelay: "5s" }}>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
        </Main>
      </Container>
      <img src="/assets/image/background_bottom.svg" width={"100%"} />
    </>
  );
};

export default Product;

import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Keyword,
  Main,
  Detail,
  Message,
  LeftTextBox,
  AnswerBox,
  SpicyAnswer,
} from "./style.js";

const Product = () => {
  const navigate = useNavigate();
  const [userSpicyAnswer, setUserSpicyAnswer]=useState();

  useEffect=(()=>{
    console.log('???')
  },[])

  console.log('---------')

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


          {/* 맵기 질문&답 */}
          <LeftTextBox style={{ animationDelay: "5s" }}>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>Do you like spicy food?</Message>
          </LeftTextBox>
          <AnswerBox className="rightTextBox" style={{  animationDelay: "6s" , marginLeft:"auto", width:"fit-content", paddingTop:7, paddingBottom:7, paddingLeft: 10, paddingRight:10}}>
            <SpicyAnswer onClick={()=>setUserSpicyAnswer('Yes')} answerIs={'Yes'}>Yes, I love spicy food!!!</SpicyAnswer>
            <SpicyAnswer onClick={()=>setUserSpicyAnswer('SortOf')} answerIs={'SortOf'}>Yea, sort of?</SpicyAnswer>
            <SpicyAnswer onClick={()=>setUserSpicyAnswer('no')} answerIs={'No'}>No, I don't. My stomach hurts.</SpicyAnswer>
          </AnswerBox>

          



        </Main>
      </Container>
      <img src="/assets/image/background_bottom.svg" width={"100%"} />
    </>
  );
};

export default Product;
